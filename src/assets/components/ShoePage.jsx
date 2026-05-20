import './ShoePage.css';
import './ProductsPage';
import './LoginPage';
import { Link } from "react-router-dom"
export function ShoePage(){
    return(
<>

<div className="container">
    <nav className="navbar">
        <img className="logo"src='/public/image copy.png'/>
   
   <div className='navlinks'>
    <Link to="/"className='hov'>Home</Link>
     <Link to="/Products" className='hov'>Products</Link>
    <Link to="/contacts" className='hov'>contacts</Link>
    <Link to="/Login"className='hov'>Login</Link>
     </div>
    </nav>
    <div className="nike">
        <div className="text">
            <h1>Nike shoes<br></br>
            Just Do it</h1>
            <button>Shop now</button>
        </div>
        <div className="image">
            <img src='/public/image copy 2.png'/>
        </div>
    </div>
</div>
<div className="About-us">
    <h1>About us</h1>
    <p>find us on all our social media platforms</p>
    <ul>
        <li>instagram</li>
        <i class="fa-brands fa-instagram"></i>
        <li>facebook</li>
        <i class="fa-brands fa-facebook"></i>
        <li>whatsapp</li>
        <i class="fa-brands fa-whatsapp"></i>

    </ul>
</div>

</>

    );
}