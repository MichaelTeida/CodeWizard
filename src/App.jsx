import './styles/App.scss'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Home from "./pages/Home.jsx"
import PrimarySearchAppBar from "./components/Header.jsx";

function App() {
    return (
        <>
            <PrimarySearchAppBar/>
            <Home/>
        </>
    )
}

export default App
