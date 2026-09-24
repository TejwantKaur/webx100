// appears for every rout after signin/
export default function({children}: {children: React.ReactNode}){
    return (
        <div>
            <div className="p-3 border-b text-center">
                Signin banner 20% off for next 20 days
            </div>
            {children}
        </div>
    );
}