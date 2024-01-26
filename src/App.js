import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Layout from "./Layout"
import Service from "./pages/Service"
import Counter from "./pages/Counter"
import Effect from "./pages/Effect"
import Reducer from "./pages/Reducer"
import Footer from "./pages/Footer"
import Callbacks from "./pages/Callbacks"
export default function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="service" element={<Service/>}/>
          <Route path="counter" element={<Counter/>}/>
          <Route path="effect" element={<Effect/>}/>
          <Route path="reducer" element={<Reducer/>}/>
          <Route path="footer" element={<Footer/>}/>
          <Route path="callbacks" element={<Callbacks/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  )
}
