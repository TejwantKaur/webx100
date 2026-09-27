function RevenueCard({title, orderCnt, amount}) {
    return ( 
        <div className="bg-white rounded shadow-md p-4">
            <div className="text-gray-500">
                {title} ?
            </div>
            <div className="flex justify-between">
                <div> ₹ {amount} </div>
                {orderCnt? <div> {orderCnt} orders {">"} </div>: null}
            </div>
            
        </div>
    );
}

export default RevenueCard;