import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import api from './services/api';
import Card from './components/Card/Card';
import './App.css';
import imgLogo from './assets/logo.svg';

export default function App() {
  const [cepInput, setCepInput] = useState('');
  const [cepInformation, setCepInformation] = useState({});  

  async function localizarCep(){
    if (cepInput.length !== 8) {
      alert('Insira um CEP válido com 8 caracteres.');
      return;
    }
    
    try {
      const respostaApi = await api.get(`${cepInput}/json/`);
      setCepInformation(respostaApi.data);
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      alert('CEP não encontrado ou ocorreu um erro na busca.');
    }
    
  }

  return (
    <div className='container'>  
      <div className='logo'>
        <img src={imgLogo}/>
        <h1>ZIPytheiro Finder</h1>
      </div>
      <div className='input'>
        <input 
          type='text' 
          maxLength='8'
          placeholder='Insira o CEP...' 
          value={cepInput} 
          onChange={(e)=> setCepInput(e.target.value)}
          />
        <button className='botao' onClick={localizarCep}>
          <FiSearch />
        </button>
      </div>
      <div className='propaganda'>
        <h3>Cansado de dar um Google? Deixa que o Pytheiro resolve.</h3>
      </div>
      {Object.keys(cepInformation).length > 0 ?(
        <div className='cep'>
          <Card tipo={'Estado'}>{cepInformation.uf}</Card>
          <Card tipo={'Bairro'}>{cepInformation.bairro}</Card>
          <Card tipo={'Rua'}>{cepInformation.logradouro}</Card>
        </div>
      ):(
        <div className='logoInformacoes'>
          <p>Nós não exibimos vários sites regionais confusos. Nós fornecemos</p>
          <p>o CEP de forma rápida e precisa para melhor lhe atender!</p>
        </div>
      )}


      

<footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>


      <footer className='imgPe'>© Desenvolvido por Wata Negreiros</footer>
    </div>
  );
}