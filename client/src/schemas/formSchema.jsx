import {z} from 'zod'

export const formSchema = z.object({
  name: z.string().min(5, {message: "Name must be at least 5 characters"}).max(30, {message: "Name must be less than 30 characters"}),
  number: z.string().length(16, {
    message: "Card number must contain 16 characters"
  }).refine(number => !isNaN(parseInt(number)),{
    message: "Card number must be a number",
  }),
  mes: z.string()
    .refine(mes => !isNaN(parseInt(mes)),{message: "Month must be a number",})
    .refine(mes => parseInt(mes) >= 1, {message: "Month must be greater than 0"})
    .refine(mes => parseInt(mes) <= 12, {message: "Month must be equal or less than 12"}),
  year: z.string()
    .refine(year => !isNaN(parseInt(year)),{message: "Year must be a number",})
    .refine(year => parseInt(year) >= 23, {message: "Year must be greater than 22"}),
  cvc: z.string().length(3).refine(cvc => !isNaN(parseInt(cvc)),{
    message: "CVC number must be a number",
  }),
});