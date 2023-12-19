import Label from "../atoms/Label.jsx";
import Input from "../atoms/Input.jsx";
import ButtonSearch from "../atoms/ButtonSearch.jsx";
import {useState} from "react";

export default function Form({ onSubmit }) {
    const [cepInput, setCepInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (cepInput.length !== 8) {
            alert('Insira um CEP válido com 8 caracteres.');
            return;
        }
        onSubmit && onSubmit(cepInput)
    }
    const handleOnChange = (value) => {
        setCepInput(value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                <div className="flex-[1_0_0%]">
                    <Label text='Insira o seu CEP'/>
                    <Input type='number' name='hs-search-article-1" id="hs-search-article-1' placeholder="Insira o seu CEP"
                           onChange={ handleOnChange }/>
                </div>
                <ButtonSearch/>
            </div>
        </form>
    )
}