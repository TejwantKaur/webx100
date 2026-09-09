import { memo } from "react";

// props
// wrap inside react memo
const Header = memo(
    function Header({ title }) {
        return ( 
            <div>
                {title}
            </div>
        );
    }
)

export default Header;