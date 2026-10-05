import Auth from "../components/Auth";
import Right from "../components/Right";

function Signup() {
    return ( 
        <div className="grid lg:grid-cols-2">
            <div className="">
                <Auth type="signup"/>
            </div>

            <div className="invisible lg:visible">
             <Right/>
            </div>
        </div>
     );
}

export default Signup;