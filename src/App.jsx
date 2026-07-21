import { HashRouter, Route, Routes} from 'react-router-dom'

import Layout from "./assets/components/layout.jsx"
import Home from "./pages/home.jsx"
import Contact from "./pages/contact.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/projects" element={<Projects />}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
