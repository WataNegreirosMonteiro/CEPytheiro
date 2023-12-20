import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import apiViacep from "./services/apiViacep.js";
import apiOpenCage from "./services/apiOpenCage.js";

import Banner from "./components/molecules/Banner.jsx";
import { Header } from "./components/organisms/Header.jsx";
import Footer from "./components/templates/Footer.jsx";
import ContentTab from "./components/organisms/ContentTab.jsx";


export default function App() {
    const [data, setData] = useState(false);
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
            const viaCepResponse = await apiViacep.get(`${cep}/json/`)
            const { bairro: neighborhood, localidade: city, uf: state, complemento } = viaCepResponse.data

            const openCageResponse = await apiOpenCage.get(`${neighborhood}+${city}+${complemento}&key=0eb652a3243947d6ac2433550d97e479&language=pt&pretty=1`)

            const matchingResult = openCageResponse.data.results.find((result) => {
                const openCageNeighborhood = result.components.hamlet || result.components.town
                const openCageCity = result.components.county || result.components.city_district
                const openCageState = result.components.state_code

                return neighborhood === openCageNeighborhood && city === openCageCity && state === openCageState
            });

            if (matchingResult) {
                const { lat, lng } = matchingResult.geometry
                viaCepResponse.data.position = [lat, lng]
                setData(viaCepResponse.data)
            } else {
                notify('CEP não encontrado ou inválido.')
            }
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