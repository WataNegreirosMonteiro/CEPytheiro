import Label from "../atoms/Label.jsx";
import Input from "../atoms/Input.jsx";
import ButtonSearch from "../atoms/ButtonSearch.jsx";

export default function Form() {
    return (
        <form>
            <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                <div className="flex-[1_0_0%]">
                    <Label text='Insira o seu CEP'/>
                    <Input type='email' name='hs-search-article-1" id="hs-search-article-1'
                           placeholder="Insira o seu CEP"/>
                </div>
                <ButtonSearch/>
            </div>
        </form>
    )
}