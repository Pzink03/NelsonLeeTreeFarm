import { Route, Routes } from "react-router-dom"
import { RootLayout } from "./layouts/RootLayout"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Gallery } from "./pages/Gallery"
import { Contact } from "./pages/Contact"

function App() {

  return (
    <>
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>

    </>
  )
}

export default App
