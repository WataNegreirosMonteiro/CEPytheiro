import {useState} from "react";

export default function ({ type, placeholder, name, id, value, onChange }) {
    const handleOnChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <input
        type={ type } name={ name } id={ id }
        className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
        placeholder={ placeholder }
        min="10000000"
        max="99999999"
        value={ value }
        onChange={ handleOnChange }
        />
    )
}