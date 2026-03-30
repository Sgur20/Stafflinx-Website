import About from './pages/About';
import Cleaning from './pages/Cleaning';
import Contact from './pages/Contact';
import Courier from './pages/Courier';
import Home from './pages/Home';
import Quality from './pages/Quality';
import Safety from './pages/Safety';
import Services from './pages/Services';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "Cleaning": Cleaning,
    "Contact": Contact,
    "Courier": Courier,
    "Home": Home,
    "Quality": Quality,
    "Safety": Safety,
    "Services": Services,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};