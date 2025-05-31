
import { type Dispatch, type SetStateAction } from "react";
import { HiOutlineMoon, HiMoon } from "react-icons/hi";


//app --> state --> header

//header

type headerPropsType = {
    preferredMode: "light" | "dark";
    setPreferredMode: Dispatch<SetStateAction<"light" | "dark">>;
}

function Header({preferredMode, setPreferredMode}:headerPropsType){
    return(
        <div className={`header-div container ${preferredMode === "light" ? "light-elements" : "dark-elements"}`}>
            <p className="header-title">Where in the world?</p>
            <button onClick={()=>{
                if(preferredMode === "light"){
                    setPreferredMode("dark")
                }else{
                    setPreferredMode("light")
                }
            }} className="header-button">
                {
                    preferredMode === "light" 
                        ? <HiOutlineMoon className="header-icon"/>
                        : <HiMoon className="header-icon"/>
                }
                
                <span>
                    {
                        preferredMode === "light" ? "Dark Mode" : "Light Mode"
                    }
                </span>
            </button>
        </div>
    )
}

export default Header;