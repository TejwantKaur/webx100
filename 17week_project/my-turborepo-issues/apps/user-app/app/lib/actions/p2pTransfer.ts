"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { db } from "@repo/db";
import { Temporal } from "temporal-polyfill";

// to is phone number;
export async function p2pTransfer(toNumber: string, sendAmount: number) {
  if (!sendAmount || sendAmount <= 0) return { msge: "Invalid amount!" };

  const session = await getServerSession(authOptions);
  const fromId = Number(session?.user?.id); // login id
  if (!fromId) return { msge: "Not Loggedin!" };

  const to = await db.orm.public.User.where({ number: toNumber }) // num string in db
    .first();
  if (!to) return { msge: "User doesnt exist!" };
  if (to.id === fromId) return { msge: "You can't send money to yourself!" };

  try {
    await db.transaction(async (tx) => {
      // if bob and alice send to each othe at same time???
      await tx.query(
        tx.sql.public.Balance.select("id", "amount")
          .where((f, fns) => fns.eq(f.userId, fromId))
          .forUpdate()
          .build(),
      );
      // await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(from)} FOR UPDATE`

      // tx means; sare tx jdo tk ni poore hunde;
      const debit = await tx.execute(
        // amount >= ${sendAmount} Already Locking;
        db.raw
          .sql`UPDATE "Balance" SET amount = amount - ${sendAmount} WHERE "userId" = ${fromId} AND amount >= ${sendAmount}`
          .affectedCount()
          .build(),
      );
      if (debit.affectedRows === 0) {
        throw new Error("Low Balance! couldnt transfer");
      }

      const credit = await tx.execute(
        db.raw
          .sql`UPDATE "Balance" SET amount = amount + ${sendAmount} WHERE "userId" = ${to.id}` // user table
          .affectedCount()
          .build(),
      );
      if (credit.affectedRows === 0) throw new Error("Money does'nt credited!");

      await tx.orm.public.p2pTransfer.create({
        fromUserId: fromId,
        toUserId: to.id,
        amount: sendAmount,
        timestamp: Temporal.Now.instant(),
      });
    });
    return { msge: "Transfer successful!" };
  } catch (e) {
    if (e instanceof Error && e.message === "Insufficient funds!") {
      return { msge: e.message };
    }
    console.error(e);
    return { msge: "Transfer failed!" };
  }
}
