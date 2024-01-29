import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomeIndex from "./Pages/Home/Index"
import FlowPhotosIndex from "./Pages/FlowPhotos/Index"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/akis-fotograflar" element={<FlowPhotosIndex />} />
        <Route path="/" element={<HomeIndex />} />
      </Routes>
      <Navbar />
    </>
  )
}

export default App
