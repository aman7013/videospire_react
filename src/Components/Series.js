import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Series()
{
    return(
        <>
        <Navbar/>

<div className="slid">
<div className="slid_c1">	
    <h2>Our <span>Series</span></h2>
    <p><span>Home </span>|  Series</p>
</div>
</div>
   <div className="real">
    <div className="real_c1">
        <img src="../img/series-banner.jpg"></img>
    </div>
  </div>

  <div className="real">
    <div className="real_c1">
        <img src="../img/category-3.jpg"></img>
    </div>
  </div>
  <div className="real">
    <div className="real_c1">
        <img src="../img/series-banner-4.png"></img>
    </div>
  </div>
        <Footer/>
        </>
    )
}
export default Series;