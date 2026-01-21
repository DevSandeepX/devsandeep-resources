import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from "./schema"

config({ path: ".env.local" });

if (!process.env.DATABASE_URL) throw new Error("Database url not aviable in .env")

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
