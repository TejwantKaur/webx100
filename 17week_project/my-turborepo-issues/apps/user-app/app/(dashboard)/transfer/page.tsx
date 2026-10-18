import { db } from "@repo/db";
import { AddMoney } from "../../../components/AddMoneyCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

async function getBalance() {
  const session = await getServerSession(authOptions);
  const balance = await db.orm.public.Balance.
  where({ userId: Number(session?.user?.id)})
  .first()

  return {
      amount: balance?.amount || 0,
      locked: balance?.locked || 0
  }
}

async function getOnRampTransactions() {
  const session = await getServerSession(authOptions);
  const txns = await db.orm.public.OnRampTransaction
  .where({ userId: Number(session?.user?.id)})
  .all()

  return txns.map(t => ({
      time: new Date(t.startTime.epochMilliseconds),
      amount: t.amount,
      status: t.status,
      provider: t.provider
  }))
}

export default async function () {
  const balance = await getBalance();
  const transactions = await getOnRampTransactions();
  return <div className="w-screen">
      <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
          Transfer
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-6 m-6">
          <div className="mr-10">
              <AddMoney />
          </div>
          <div className="mr-10">
              <BalanceCard amount={balance.amount} locked={balance.locked} />
              <div className="pt-8">
                  <OnRampTransactions transactions={transactions} />
              </div>
          </div>
      </div>
  </div>
}
