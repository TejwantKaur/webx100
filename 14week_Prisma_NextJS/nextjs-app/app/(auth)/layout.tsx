// appears for every rout after signin/

export default function({children}: {children: React.ReactNode}){
    return (
        <div>
            <div className="p-3 border-b text-center">
                banner for signin and signup
            </div>
            {children}
        </div>
    );
}

// http://localhost:3000/signin 
// can call without /auth/signin