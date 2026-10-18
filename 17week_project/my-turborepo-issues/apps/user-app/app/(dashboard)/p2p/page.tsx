// keep folder names; lowr case;

import SendMoneyCard from "../../../components/SendMoneyCard";

export default function() {
    return (
        <div className="w-full">
            <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
                P2P
            </div>
            <div className="m-10 w-full">
                <div className="w-full max-w-lg px-4">
                    <SendMoneyCard />
                </div>
                
            </div>

        </div>
    )
}