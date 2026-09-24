import postgres from "@prisma/orm-postgres/runtime";
import contract from "./generated/contract.json" with { type: "json" };

export const db = postgres({
  contractJson: contract,
  url: process.env.DATABASE_URL!,
});