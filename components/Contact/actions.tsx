"use server";
import nodemailer from "nodemailer";
import * as Z from "zod";
import { ContactFormSchema } from "./ContactFormSchema";
import { FormState } from "@/app/Types/send-email";

const RECIPIENT = process.env.CONTACT_TO_EMAIL ?? "andi.bevapi@gmail.com";

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

export async function sendEmailAction(prevState: FormState, formData: FormData): Promise<FormState> {
    const parsed = ContactFormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        // absent optional field arrives as null, which the schema would reject
        company: formData.get("company") ?? undefined,
        message: formData.get("message"),
    });

    if (!parsed.success) {
        const errors = Z.flattenError(parsed.error);
        return {
            success: false,
            message: "Validation failed",
            errors: errors.fieldErrors,
        };
    }

    const { name, email, company, message } = parsed.data;
    const { SMTP_HOST, SMTP_PORT, SMTP_EMAIL, SMTP_PASS } = process.env;

    if (!SMTP_HOST || !SMTP_EMAIL || !SMTP_PASS) {
        console.error(
            "[contact] Missing SMTP configuration. Set SMTP_HOST, SMTP_PORT, SMTP_EMAIL and SMTP_PASS."
        );
        return {
            success: false,
            message: `We could not send your message right now. Please email us directly at ${RECIPIENT}.`,
            errors: {},
        };
    }

    const port = Number(SMTP_PORT) || 465;
    const companyLine = company?.trim() ? company : "Not provided";

    try {
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port,
            secure: port === 465,
            auth: { user: SMTP_EMAIL, pass: SMTP_PASS },
        });

        await transporter.sendMail({
            // Must be the authenticated mailbox, otherwise the provider rejects
            // the message or rewrites the header. The visitor goes in replyTo.
            from: `"Versus One" <${SMTP_EMAIL}>`,
            to: RECIPIENT,
            replyTo: `"${name}" <${email}>`,
            subject: `New contact form message from ${name}`,
            text: [
                "New contact form submission",
                "",
                `Name: ${name}`,
                `Email: ${email}`,
                `Company: ${companyLine}`,
                "",
                "Message:",
                message,
            ].join("\n"),
            html: `
                <h2>New contact form submission</h2>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
                <p><strong>Company:</strong> ${escapeHtml(companyLine)}</p>
                <p><strong>Message:</strong></p>
                <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
            `,
        });

        return {
            success: true,
            message: "Thank you for reaching out. We'll get back to you shortly.",
            errors: {},
        };
    } catch (error) {
        console.error("[contact] Failed to send email:", error);
        return {
            success: false,
            message: `Your message could not be sent. Please email us directly at ${RECIPIENT}.`,
            errors: {},
        };
    }
}
