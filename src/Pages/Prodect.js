import React from 'react';
import { Link } from 'react-router-dom';

const Prodect =()=>{
   return(
       <section>
        <div>Welcom to our Prodect..!</div>
          <ul>
             <li>
                <Link to='/prodects/p1'> A Book</Link>
             </li> 
             <li>
                <Link to='/prodects/p2'> A Pen</Link>
             </li>
             <li>
                <Link to='/prodects/p3'> A Pencil</Link>
             </li>
          </ul>
       </section> 
   )
}
export default Prodect;