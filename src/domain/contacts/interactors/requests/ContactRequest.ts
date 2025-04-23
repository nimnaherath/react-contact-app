import { z } from "zod";

const ContactRequestSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .length(10, { message: "Phone number must be 10 digits" })  
    .regex(/^\d+$/, { message: "Phone number must contain only digits" }),
});

type ContactRequest = z.infer<typeof ContactRequestSchema>;

export { ContactRequestSchema };

export type { ContactRequest };
