import Auth from "../components/Auth";
import Right from "../components/Right";

function Signin() {
    return ( 
        <div className="grid lg:grid-cols-2">
            <div className="">
                <Auth type="signin"/>
            </div>

            <div className="invisible lg:visible">
             <Right/>
            </div>
        </div>
     );
}

export default Signin;