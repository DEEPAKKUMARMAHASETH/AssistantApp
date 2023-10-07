import { Routes, Route } from 'react-router-dom';
import Herosection from "../HeroSection/Herosection"
import Home from '../Pages/Home';
import Navbar from '../Navbar/Navbar';
import Contact from '../Pages/Contact';
const AllRoutes = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<Herosection />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                </Routes>
            </div>
                <div>
                    <Contact />
                </div>
        </div>
    )
}

export default AllRoutes