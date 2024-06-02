

import { Link } from "react-router-dom";
import "../../global.css";


export const Header = ()=>{
    return(
        <div>
            <header>
                <Link to={'/'}>الرئيسية</Link>
            </header>
        </div>
    )
}