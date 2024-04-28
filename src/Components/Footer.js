import { Link } from "react-router-dom"
function Footer()
{
   
    return(
        <>

<div className="footer">
<div className="footer_c1">
<img src="../img/logo-1.png"></img>
<p>Eiusmod tempor incididunt ut la abore et minim ven exerc itation ulla mco lboris naliquip ex ea comm.</p>
<p><i class="fa fa-facebook" aria-hidden="true"></i> 
<i class="fa fa-twitter" aria-hidden="true"></i>
<i class="fa fa-linkedin" aria-hidden="true"></i>
<i class="fa fa-github" aria-hidden="true"></i>
</p>
</div>
<div className="footer_c2">
<p>
<span><Link to="/">Home</Link></span>
<span><Link to="/">About</Link></span>
<span><Link to="/">Home</Link></span>
<span><Link to="/">Home</Link></span>
<span><Link to="/">Home</Link></span>
</p>

<table>
    <tr>
        <td className="footbdr"><img src="../img/foot1.png"></img></td>
        <td className="footbdr"><img src="../img/foot2.png"></img></td>
        <td className="footbdr"><img src="../img/foot3.png"></img></td>
        <td className="footbdr"><img src="../img/foot1.png"></img></td>
        <td className="footbdr"><img src="../img/foot3.png"></img></td>
    
    </tr>
</table>

<p>
<span><Link to="/">Home</Link></span>
<span><Link to="/">About</Link></span>
<span><Link to="/">Home</Link></span>
<span><Link to="/">Home</Link></span>
<span><Link to="/">Home</Link></span>
</p>
</div>
</div>
  

        </>
    )

}
export default Footer;