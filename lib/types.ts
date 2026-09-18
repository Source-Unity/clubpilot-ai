import { z } from "zod";

export const wedstrijdtypeOpties = [
  "competitie",
  "beker",
  "oefenwedstrijd",
  "toernooi",
  "overig",
] as const;

export const wedstrijdgegevensSchema = z.object({
  thuisclub: z.string().trim().min(1).max(100),
  uitclub: z.string().trim().min(1).max(100),
  eindstand: z.string().trim().min(1).max(20),

  wedstrijdtype: z
    .enum(wedstrijdtypeOpties)
    .default("competitie"),

  samenvatting: z.string().trim().min(10).max(2000),

  doelpuntenmakers: z
    .string()
    .trim()
    .max(500)
    .optional()
    .default(""),

  manOfTheMatch: z
    .string()
    .trim()
    .max(250)
    .optional()
    .default(""),

  eigenTeam: z.enum(["thuis", "uit"]).optional(),

  spelers: z
    .array(z.string().trim().min(1).max(100))
    .max(50)
    .optional()
    .default([]),

  doelpuntenSelectie: z
    .array(z.string().trim().min(1).max(100))
    .max(50)
    .optional()
    .default([]),
});

export type Wedstrijdtype =
  (typeof wedstrijdtypeOpties)[number];

export type Wedstrijdgegevens = z.infer<
  typeof wedstrijdgegevensSchema
>;