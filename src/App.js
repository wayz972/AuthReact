import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import SignUpModal from "./components/SignUpModal";
import Private from "./pages/Private"
import PrivateHome from "./pages/Private/PrivateHome"
import SignIn from "./components/SignIn";
function App() {
  return (
    <>
    <SignUpModal/>
    <SignIn/>
    <Navbar/>
     <Routes>
      {/* chemin de mes routes  */}
      <Route path="/" element={<Home/>}/>
      <Route path="/private" element={<Private/>}/>
      <Route path="/private/private-home" element={<PrivateHome/>}/>
    
     </Routes>

    </>
  );
}

export default App;
