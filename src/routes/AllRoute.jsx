import {Routes,Route} from "react-router-dom"
import Home from "../components/Home"



function AllRoute(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}

export default AllRoute