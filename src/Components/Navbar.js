import { Link } from "react-router-dom";
function Navbar()
{
    return(
        <>
        {/* <Link to="/">Home</Link>
        <Link to="/About">About</Link> */}

        <div className="header">   
        <div class="header_c0">
		<i class="fa fa-bars" aria-hidden="true" onclick="menu()"></i>
	     </div>                   
            <div className="header_c1 fade-left">
             <img src="../img/logo-1.png"></img>
            </div>
            <div className="header_c2 fade-top">
            <ul>
               <li><Link to="/" className="home">Home<i class="fa fa-caret-down" aria-hidden="true"></i></Link></li>
                <li> <Link to="/Movie">Movie<i class="fa fa-caret-down" aria-hidden="true"></i></Link></li>
                <li><Link to="/Series">Series</Link><i class="fa fa-caret-down" aria-hidden="true"></i></li>
                <li><Link to="/">Blogs</Link><i class="fa fa-caret-down" aria-hidden="true"></i></li>
                <li><Link to="/">Shop</Link><i class="fa fa-caret-down" aria-hidden="true"></i></li>
             </ul>
            </div>
            <div className="header_c3">
                <p>
                    <i class="fa fa-search search" aria-hidden="true"></i>
                    <i class="fa fa-user" aria-hidden="true"></i>
                </p>
            </div>
            </div>   


            

        </>
    );

}
export default Navbar;