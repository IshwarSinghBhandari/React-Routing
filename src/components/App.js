import{Outlet} from "react-router-dom";
import Header from "./Header";


function App() {
  return (
  <>
    <Header/>
<Outlet>

</Outlet>
</>
  );
}

export default App;

