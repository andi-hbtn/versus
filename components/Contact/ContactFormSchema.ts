import * as Z from "zod";

export const ContactFormSchema = Z.object({
    name: Z.string({ error: "name should contain string values" }).min(3, "Name must contain at least 3 characters"),
    email: Z.email().nonempty("email should not be empty"),
    company: Z.string().optional(),
    message: Z.string().min(15, "Message must be at least 15 characters"),
});