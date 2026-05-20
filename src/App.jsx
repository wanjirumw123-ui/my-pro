import { BrowserRouter , Routes,Route } from "react-router-dom";

import { ShoePage } from './assets/components/ShoePage.jsx';
//import { ProductsPage } from './assets/components/ProductsPage.jsx';
import './App.css'
import ProductsPage from "./assets/components/ProductsPage";
import LoginPage from "./assets/components/LoginPage";
import ContactsPage from "./assets/components/ContactsPage";
function App() {
 return (
  <>
  <BrowserRouter>
    <Routes>
     <Route path ="/" element={<ShoePage/>}/>
      <Route path ="/Products" element={<ProductsPage/>}/>
      <Route path ="/Login" element={<LoginPage/>}/>
       <Route path ="/contacts" element={<ContactsPage/>}/>
    </Routes>
  </BrowserRouter>
    </>
  );
}
   export default App      