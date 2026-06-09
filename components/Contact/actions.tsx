"use server";
import nodemailer from "nodemailer";
import * as Z from "zod";
import { ContactFormSchema } from "./ContactFormSchema";

export async function sendEmailAction(prevState: any, formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const message = formData.get("message") as string;

    try {
        const parsed = ContactFormSchema.safeParse({ name, email, company, message });

        if (!parsed.success) {
            const errors = Z.flattenError(parsed.error);
            return {
                success: false,
                message: "Validation failed",
                errors: errors.fieldErrors,
            };
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.SMTP_EMAIL,
            subject: "New Message from Versus",
            text: `
                    New Contact Form Submission:
                    Name: ${name}
                    Email: ${email}
                    Company: ${company}
                    Message:${message}
                `,
        });

        return {
            success: true,
            message: "Thank you for reaching out. We'll get back to you shortly.",
            errors: {},
        };
    } catch (error) {
        console.log("error----", error)
        return {
            success: false,
            message: error instanceof Error ? error.message : "Unexpected error",
            errors: {},
        }
    }

}