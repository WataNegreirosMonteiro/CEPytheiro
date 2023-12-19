import { useState }  from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Banner from "./components/molecules/Banner.jsx";
import { Header } from "./components/organisms/Header.jsx";
import Footer from "./components/templates/Footer.jsx";
import ContentTab from "./components/organisms/ContentTab.jsx";
import api from "../localizador_de_cep/src/services/api.js";

export default function App() {
    const [data, setData] = useState({});
    const notify = (msg) => {
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    }

    const handleData = async (cep) => {
        try {
            const response = await api.get(`${cep}/json/`)
            setData(response.data);

            data.erro && notify('CEP não encontrado ou inválido.')
        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
            notify('CEP não encontrado ou ocorreu um erro na busca.')
        }
    }

    return (
        <main className="w-full flex justify-center flex-col">
            <Banner description='Saiba mais e veje mais projetos' buttonText='LinkedIn' />
            <Header handleSearch={handleData} />
            { data.cep && <ContentTab data={data} /> }
            <Footer />
        </main>
    )
}