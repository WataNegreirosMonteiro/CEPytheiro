import Title from "../atoms/Title.jsx";
import TitleDescription from "../atoms/TitleDescription.jsx";
import Form from "./Form.jsx";
import DecorativeLine from "../atoms/DecorativeLine.jsx";
import DataSought from "../molecules/DataSought.jsx";

export function Header(){
    return (
        <div className="relative overflow-hidden">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
                <div className="text-center">

                    <Title text='CEPytheiro'/>
                    <TitleDescription
                        text='Navegando pelo melhor para você! Descubra estados, bairros e ruas de forma descomplicada e inovadora.'/>

                    <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                        <Form/>
                        <DecorativeLine type='left'/>
                        <DecorativeLine type='right'/>
                    </div>

                    <DataSought/>
                </div>
            </div>
        </div>
    )
}