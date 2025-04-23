import { z } from "zod";

const ContactRequestSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .regex(/^\+?[0-9]*$/, { message: "Invalid phone number" }),
});

type ContactRequest = z.infer<typeof ContactRequestSchema>;

export { ContactRequestSchema };

export type { ContactRequest };
