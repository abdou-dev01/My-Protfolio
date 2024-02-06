import { BrowserRouter, Route, Routes } from "react-router-dom"

import Button from "../component/Button"
import Home from "./Home"
import About from "./About"
import Portfolio from "./Portfolio"
import Blogs from "./Blogs"
import Contact from "./Contact"
import { useEffect, useState } from "react"

function App() {
    const [isDark, setIsDark] = useState(false)
    const [selected, setSelected] = useState(null)
    const location = window.location.pathname.slice(1)

    useEffect(function () {
        setSelected(document.querySelector(`.controls[data-id='${location}']`))
    }, [location])

    useEffect(function () {
        if (isDark) document.documentElement.classList.add("light-mode")
        else document.documentElement.classList.remove("light-mode")
    }, [isDark])

    return (
        <>
        <Button setIsDark={setIsDark} />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home selected={selected} setSelected={setSelected} />} />
                <Route path="about" element={ <About selected={selected} setSelected={setSelected} />} />
                <Route path="portfolio" element={ <Portfolio selected={selected} setSelected={setSelected} />} />
                <Route path="blogs" element={ <Blogs selected={selected} setSelected={setSelected} />} />
                <Route path="contact" element={ <Contact selected={selected} setSelected={setSelected} />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App
