import Banner from "./components/molecules/Banner.jsx";
import {Header} from "./components/organisms/Header.jsx";
import Footer from "./components/templates/Footer.jsx";
import ContentTab from "./components/organisms/ContentTab.jsx";
import {useState} from "react";
import api from "../localizador_de_cep/src/services/api.js";

export default function App() {
    const [data, setData] = useState(false);

    const handleData = async (cep) => {
        try {
            const response = await api.get(`${cep}/json/`);
            setData(response.data);
        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
            alert('CEP não encontrado ou ocorreu um erro na busca.');
        }
    }

    return (
        <main className="w-full flex justify-center flex-col">
            <Banner description='Saiba mais e veje mais projetos' buttonText='LinkedIn'/>
            <Header handleSearch={ handleData }/>
            { data && <ContentTab data={data}/>}
            <Footer/>
        </main>
    )
}
