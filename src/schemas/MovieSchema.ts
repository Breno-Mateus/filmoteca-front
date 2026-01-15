import { z } from "zod";

export const movieSchema = z.object({
  title: z.string()
    .min(1, "O título é obrigatório")
    .max(100, "O título é muito longo"),
  director: z.string()
    .min(3, "O nome do autor deve ter pelo menos 3 letras"),
  nota: z.number()
  .min(0, "Mínimo 0")
  .max(10, "Máximo 10")
});


export type MovieFormData = z.infer<typeof movieSchema>;