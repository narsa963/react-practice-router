
import{Route, Redirect} from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Prodect from "./Pages/Prodect";
import ProdectDetails from "./Pages/ProdectDetails";
import Welcom from "./Pages/Welcom";

function App() {
  return (
    <div>
     <MainHeader />
     <main>
      <Route path='/' exact>
        <Redirect to='/welcome' />
      </Route>
      <Route path='/welcome'><Welcom/></Route>
      <Route path='/prodects' exact><Prodect/> </Route>
      <Route path='/prodects/:prodectId'> <ProdectDetails/> </Route>
    </main>
   </div> 
  );
}

export default App;
