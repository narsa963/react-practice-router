
import{Route} from "react-router-dom";
import Prodect from "./Pages/Prodect";
import Welcom from "./Pages/Welcom";

function App() {
  return (
    <div>
      <Route path='/wecome' > <Welcom /> </Route>
      <Route path='/prodects'> <Prodect /> </Route>
    </div>
  );
}

export default App;
