import { z } from "zod";

export const bookSchema = z.object({
	title: z.string().min(1),
	subtitle: z.string().optional(),
	authors: z.array(z.string().min(1)).min(1),
	description: z.string().min(5),
	price: z.number().min(1),
	rating: z.number().min(0).max(5),
	genre: z.array(z.string().min(1)).min(1),
	cover: z.string().url(),
});

export const userSchema = z
	.object({
		name: z.string().min(1),
		email: z.string().email(),
		password: z
			.string()
			.min(8)
			.max(16)
			.refine(
				(val) => {
					const hasUpperCase = /[A-Z]/.test(val);
					const hasLowerCase = /[a-z]/.test(val);
					const hasNumber = /[0-9]/.test(val);
					const hasSpecial = /[^a-zA-Z0-9]/.test(val);

					return (
						hasUpperCase && hasLowerCase && hasNumber && hasSpecial
					);
				},
				{
					message:
						"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
				}
			),
		confirmPassword: z.string().min(8).max(16),
	})
	.superRefine((data, ctx) => {
		if (data.password !== data.confirmPassword) {
			ctx.addIssue({
				code: "password_mismatch",
				message: "Passwords do not match",
				path: ["confirmPassword"],
			});
		}
	});

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string(),
});
