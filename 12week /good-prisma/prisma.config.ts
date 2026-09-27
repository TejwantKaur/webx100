import "dotenv/config"; // loads variables from .env to (process.env)

// Import Prisma's config function
import { definePrismaConfig } from "prisma/config";

// Import PostgreSQL ORM configuration
import { defineConfig as ormConfig } from "@prisma/orm-postgres/config";

export default definePrismaConfig({
  // Telling ORM configuration to use this PostgreSQL ORM configuration.
  orm: ormConfig({
    contract: "./prisma/contract.prisma",
    db: { 
      connection: process.env["DATABASE_URL"]!
    }
  }),
  skills: {
    check: false,
  },
});

// string | undefined
// ! tells TypeScript: "Trust me, this value exists."