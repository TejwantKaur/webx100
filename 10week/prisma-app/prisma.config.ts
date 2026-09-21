import { definePrismaConfig } from "prisma/config";
import { defineConfig as ormConfig } from "@prisma/orm-postgres/config";

export default definePrismaConfig({
  skills: {
    agents: ["claude", "cursor", "agents", "devin"],
  },
  
  // 2. Correctly passes the PostgreSQL configuration mapping
  orm: ormConfig({
    contract: "./prisma/contract.prisma", // Your database schema/contract file path
    db: {
      connection: "postgresql://neondb_owner:npg_jWi31gImxKwR@ep-fancy-base-ai6mcxpd-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
    },
  }),
});

