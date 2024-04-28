
import Home from "./Components/Home";
import Movie from "./Components/Movie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Series from "./Components/Series";
function App()
{
  return(
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Movie" element={<Movie/>}/>
      <Route path="/Series" element={<Series/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}
export default App;