import React from "react";
import { Link } from "react-router-dom";

const MainHeader = () =>{
   return(
       <header>
           <h1>hello</h1>
          <nav>
             <ul>
               <li>
                  <Link to='/welcome'>Welcome</Link>  
               </li>
               <li>
                  <Link to='/prodects'>Prodect</Link>  
               </li>  
             </ul> 
          </nav>
         </header>
   )
}
export default MainHeader;
