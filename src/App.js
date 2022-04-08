
import{Route} from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Prodect from "./Pages/Prodect";
import Welcom from "./Pages/Welcom";

function App() {
  return (
    <div>
     <MainHeader />
      <main>
       <Route path='/wecome' > <Welcom /> </Route>
       <Route path='/prodects'> <Prodect /> </Route>
      </main> 
    </div>
  );
}

export default App;
