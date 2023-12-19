import VerticalTabTitle from "../atoms/VerticalTabTitle.jsx";
import VerticalTabCard from "../atoms/VerticalTabCard.jsx";
import DecorativeLine from "../atoms/DecorativeLine.jsx";
import {DataCard} from "../atoms/DataCard.jsx";

export default function ContentTab() {
    return (
        <>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="relative p-6 md:p-16">
                    <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                        <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                            <VerticalTabTitle text='Informações encontradas com base no seu CEP'/>

                            <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
                                <VerticalTabCard type='Estado' data={2346}/>
                                <VerticalTabCard type='Localidade' data={2346}/>
                                <VerticalTabCard type='Bairro' data={2346}/>
                            </nav>
                        </div>

                        <div className="lg:col-span-6">
                            <div className="relative">
                                <div>
                                    <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                                        <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                                             src="https://www.brasil-turismo.com/mapas/mapa/porto-velho.jpg"
                                             alt="Image Description"/>
                                    </div>
                                </div>

                                <DecorativeLine type='right'/>
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
                        <div
                            className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
                    </div>
                </div>
            </div>

            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <nav className="max-w-6xl mx-auto grid sm:flex gap-y-px sm:gap-y-0 sm:gap-x-4" aria-label="Tabs"
                     role="tablist">
                    <DataCard type='CEP' data={123}/>
                    <DataCard type='Logradouro' data={123}/>
                    <DataCard type='DDD' data={123}/>
                </nav>
            </div>
        </>
    )
}