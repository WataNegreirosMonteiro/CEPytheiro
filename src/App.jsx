import React from 'react'
import api from './services/api';
import Card from './components/Card/Card';
import './App.css';

import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import imgLogo from './assets/logo.svg';

export default function App() {
  const [cep, setCep] = useState()
  const [informacao, setInformacao] = useState({})

  async function localizarCep(){
    if (cep.length < 8){
      alert('Insira uma quantidade de caracteres válida.')
      return;
    }else{
      try{
        const respostaApi = await api.get(`${cep}/json/`);
        setInformacao(respostaApi.data)
      }catch{
        alert('CEP não encontrado.')
        return;
      }
    }
  }

  return (
    <div className='container'>  
      <div className='logo'>
        <img src={imgLogo}/>
        <h1>PytheiroBuscas</h1>
      </div>
      <div className='input'>
        <input 
          type='text' 
          maxlength='8'
          placeholder='Insira o CEP...' 
          value={cep} 
          onChange={(e)=> setCep(e.target.value)}
          />
        <button className='botao' onClick={localizarCep}><FiSearch /></button>
      </div>
      <div className='propaganda'>
        <h3>Cansado de dar um Google? Deixa que o Pytheiro resolve.</h3>
      </div>
      {Object.keys(informacao).length > 0 ?(
        <div className='cep'>
          <Card tipo={'Estado'}>{informacao.uf}</Card>
          <Card tipo={'Bairro'}>{informacao.bairro}</Card>
          <Card tipo={'Rua'}>{informacao.logradouro}</Card>
        </div>
      ):(
        <div className='logoInformacoes'>
          <p>Nós não exibimos vários sites regionais confusos. Nós fornecemos</p>
          <p>o CEP de forma rápida e precisa para melhor lhe atender!</p>
        </div>
      )}
      <footer className='imgPe'>© Desenvolvido por Wata Negreiros</footer>
    </div>
  );
}