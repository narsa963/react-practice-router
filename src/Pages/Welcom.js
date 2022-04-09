import React from 'react';
import { Route } from 'react-router-dom';

const Welcom =()=>{
   return(
    <section>
        <div>Welcom to our Pagr..!</div>
        <Route path='/welcome/new-user'>The New User</Route>
    </section>
   )
}
export default Welcom;