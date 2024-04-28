import Footer from "./Footer";
import Navbar from "./Navbar";
function Movie()
{
    return(
        <>
        <Navbar/>
    
<div className="slid">
<div className="slid_c1">	
    <h2>Our <span>Movies</span></h2>
    <p><span>Home </span>|  Movies</p>
</div>
</div>

<div className="latest">
    <div className="latest_c1">
        <h2>New Release Movies</h2>
        <div className="latest_row">
            <div className="latest_c1_a">
                <img src="../img/ucm_poster01.jpg"></img>
            </div>
            <div className="latest_c1_a">
                <img src="../img/ucm_poster02.jpg"></img>
            </div>
            <div className="latest_c1_a">
                <img src="../img/ucm_poster03.jpg"></img>
            </div>
            <div className="latest_c1_a">
                <img src="../img/ucm_poster04.jpg"></img>
            </div>
            <div className="latest_c1_a">
                <img src="../img/comedy-series-1.png"></img>
            </div>
        </div>
    </div>
  </div>

<div className="real">
    <div className="real_c1">
        <img src="../img/series-banner-6.png"></img>
    </div>
  </div>


  <div className="latest">
    <div className="latest_c1">
        <h2>FEATURED MOVIES</h2>
        <div className="latest_row">
            <div className="latest_c1_a">
                <img src="../img/2-4.jpg"></img>
            </div>
            <div className="latest_c1_a">
                <img src="../img/E-Freinds-1.jpg"></img>
            </div>
            <div className="latest_c1_a">
                <img src="../img/4-2-1.jpg"></img>
            </div>
            <div className="latest_c1_a">
                <img src="../img/3-2-1.jpg"></img>
            </div>
            <div className="latest_c1_a">
                <img src="../img/2-2-1.jpg"></img>
            </div>
        </div>
    </div>
  </div>


    
  <div className="never">
<div className="never_bg">

</div>
<div className="never_c1">
<img src="../img/series-banner-7.png"></img>
</div>
<div className="never_content fade-left">
    <h2>Never Stop Looking </h2>
    <h3>
        <span className="">450Tk</span>
        <span className="five"><s>500Tk</s></span>
    </h3>
    <p><span className="button">Watch Now</span></p>
</div>
</div>

   
<div className="latest">
    <div className="latest_c1">
        <h2>Award Winning Movies</h2>
        <div className="latest_row">
            <div className="latest_c1_a">
                <img src="../img/movie-06.jpg"></img>
            </div>
            <div className="latest_c1_a">
                <img src="../img/movie-09.jpg"></img>
            </div>
            <div className="latest_c1_a">
                <img src="../img/movie-10.jpg"></img>
            </div>
            <div className="latest_c1_a">
                <img src="../img/horror-6.jpg"></img>
            </div>
            <div className="latest_c1_a">
                <img src="../img/comedy-series-1.png"></img>
            </div>
        </div>
    </div>
  </div>
  

  <div className="latest">
    <div className="latest_c1">
        <h2>Watch With Family</h2>
        <div className="latest_row">
            <div className="latest_c1_a">
                <img src="../img/movie-06.jpg"></img>
            </div>
            <div className="latest_c1_a">
                <img src="../img/movie-09.jpg"></img>
            </div>
            <div className="latest_c1_a">
                <img src="../img/movie-10.jpg"></img>
            </div>
            <div className="latest_c1_a">
                <img src="../img/horror-6.jpg"></img>
            </div>
            <div className="latest_c1_a">
                <img src="../img/comedy-series-1.png"></img>
            </div>
        </div>
    </div>
  </div>

        <Footer/>
        </>
    )
    
}
export default Movie;