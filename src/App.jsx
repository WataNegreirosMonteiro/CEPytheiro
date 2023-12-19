import Banner from "./components/molecules/Banner.jsx";
import {Header} from "./components/organisms/Header.jsx";
import Footer from "./components/templates/Footer.jsx";
import ContentTab from "./components/organisms/ContentTab.jsx";

export default function App() {
    return (
        <main className="w-full flex justify-center flex-col">
            <Banner description='Saiba mais e veje mais projetos' buttonText='LinkedIn'/>
            <Header/>
            <ContentTab />
            <Footer/>
        </main>
    )
}
