import { useState } from "react"
const Nav=()=>
{

    const [mn,setmn]=useState(false);
    const menuhandle=()=>
    {
        if(mn==false)
        setmn(true)
    else
    setmn(false)
    }
    return(
        <div  className="nav">
            <div className="left"><span>Potfolio</span> </div>
            <div className="right">
                <button>Home</button>
                <button>About</button>
                <button>Services</button>
                <button>Skills</button>
                <button>Project</button>
                <button>Contects</button>
            </div>
            <div  className="menuicon"> <button  onClick={menuhandle} style={{background: "transprant"}}>menu</button></div>
           
           {mn && <div className="menu"   >
                <button>Home</button>
                <button>About</button>
                <button>Services</button>
                <button>Skills</button>
                <button>Project</button>
                <button>Contects</button>
            </div>
            

           }
           

        </div>
    )
}
export default Nav