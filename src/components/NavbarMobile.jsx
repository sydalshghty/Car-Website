import "../css/navbar-mobile.css";
import { FaCircleUser } from "react-icons/fa6";

function NavbarMobile(){
    return(
        <div id="navbar-mobile" className="fixed top-0 left-0 h-full text-black transition-all duration-300 bg-white shadow-lg dark:bg-gray-900 rounded-tr-2xl rounded-br-2xl Navbar-mobile">
            <div className="col-user">
                <div>
                    <FaCircleUser/>
                </div>
                <div>
                    <h1>Hello User</h1>
                    <h1>Premium user</h1>
                </div>
            </div>
        </div>
    )
}
export default NavbarMobile;