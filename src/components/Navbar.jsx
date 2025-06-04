import {  useState,useEffect, useRef } from "react";
import { BiSolidMoon,BiSolidSun } from "react-icons/bi";
import { HiBars3BottomRight,HiOutlineBars3CenterLeft } from "react-icons/hi2";
import "../css/navbar.css";

function Navbar() {
    // dark mode function
    const [darkMode,setDarkMode] = useState(false);

        useEffect(() => {
             const element = document.documentElement;
            if(darkMode){
            element.classList.add("dark")
            }else{
            element.classList.remove("dark")
            }
            
        },[darkMode]);

        const handleDarkMode = () => {
            setDarkMode(!darkMode)
        }
  //
    const NavLinks = [
        {
            id: 1,
            nameLink: "HOME",
            Link: "/#"
        },
        {
            id: 2,
            nameLink: "CARS",
            Link: "/#CARS"
        },
        {
            id: 3,
            nameLink: "ABOUT",
            Link: "/#ABOUT"
        },
        {
            id: 4,
            nameLink: "BOOKING",
            Link: "/#BOOKING"
        },
    ]

    const [bars,setbars] = useState(true);
    const handlebars = () => {
        setbars(!bars);
    }

   useEffect(() => {
    const Navbarmobile = document.getElementById("navbar-mobile");
    if (!Navbarmobile) return;

    if (bars) {
        Navbarmobile.classList.remove("show");
    } else {
        Navbarmobile.classList.add("show");
    }
}, [bars]);

    return(
        <>
        <nav className="py-4 transition-all duration-300 bg-white shadow-md dark:bg-headerdarkBG">
            <div className="container flex items-center justify-between">
                <div className="col-logo">
                    <h1 className="font-serif text-3xl font-bold transition-colors duration-300 dark:text-white">Car Rental</h1>
                </div>
                <div className="flex items-center gap-10">
                    <ul className="flex gap-8 all-links">
                        {NavLinks.map((link) => {
                            return(
                                <li key={link.id}>
                                    <a className="pb-3 text-lg font-medium text-black transition-colors duration-300 dark:text-white hover:text-primary dark:hover:text-primary hover:border-b-2 border-primary" 
                                    style={{letterSpacing: "0.5px"}} 
                                    href={link.Link}>{link.nameLink}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="cursor-pointer col-dark">
                        {!darkMode ? 
                        <BiSolidMoon className="text-3xl transition-colors duration-300 cursor-pointer dark:text-white" onClick={handleDarkMode}/>
                        :
                        <BiSolidSun className="text-3xl transition-colors duration-300 cursor-pointer dark:text-white" onClick={handleDarkMode}/>
                        }
                    </div>
                    <div className="btn-bars">
                        {bars ? 
                        <HiBars3BottomRight   className="text-4xl cursor-pointer dark:text-white" onClick={() => {
                            handlebars();
                        }}/>
                        :
                        <HiOutlineBars3CenterLeft   className="text-4xl cursor-pointer dark:text-white" onClick={() => {
                            handlebars();
                        }}/>
                    }
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Navbar;