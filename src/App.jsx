import Banner from "./components/molecules/Banner.jsx";
import {Header} from "./components/organisms/Header.jsx";
import Footer from "./components/templates/Footer.jsx";
import {DataCard} from "./components/atoms/DataCard.jsx";

export default function App() {
    return (
        <main className="w-full flex justify-center flex-col">
            <Banner description='Saiba mais e veje mais projetos' buttonText='LinkedIn'/>
            <Header/>

            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="relative p-6 md:p-16">
                    <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                        <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
                                Informações encontradas com base no seu CEP
                            </h2>

                            <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
                                <button type="button"
                                        className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active"
                                        id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1"
                                        aria-controls="tabs-with-card-1" role="tab">
            <span className="flex">
                <svg
                    className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                    xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" fill="currentColor"
                    viewBox="0 0 256 256"><path
                    d="M32.14,38.88A12,12,0,0,0,28,48V216a12,12,0,0,0,24,0V173.72c22.84-17.12,42.1-9.12,70.68,5,16.23,8,34.74,17.2,54.8,17.2,14.72,0,30.28-4.94,46.38-18.88A12,12,0,0,0,228,168V48a12,12,0,0,0-19.86-9.07c-24.71,21.41-44.53,13.31-74.82-1.68C105.19,23.27,70.17,5.94,32.14,38.88ZM204,162.26c-22.84,17.13-42.1,9.11-70.68-5C110.16,145.76,82.33,132,52,145.87V53.69c22.84-17.12,42.1-9.12,70.68,5,16.23,8,34.74,17.2,54.8,17.2A63,63,0,0,0,204,70.08Z"></path></svg>
              <span className="grow ms-6">
                <span
                    className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Estado</span>
                <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">EXEMPLO foi a unidade federativa encontrada com base no CEP inserido.</span>
              </span>
            </span>
                                </button>

                                <button type="button"
                                        className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2"
                                        aria-controls="tabs-with-card-2" role="tab">
            <span className="flex">
                <svg
                    className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                    xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" fill="currentColor"
                    viewBox="0 0 256 256"><path
                    d="M240,204H228V96a20,20,0,0,0-20-20H172V32a20,20,0,0,0-28.45-18.12l-104,48.54A20.06,20.06,0,0,0,28,80.55V204H16a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24ZM204,100V204H172V100ZM52,83.09,148,38.3V204H52ZM132,112v12a12,12,0,0,1-24,0V112a12,12,0,0,1,24,0Zm-40,0v12a12,12,0,0,1-24,0V112a12,12,0,0,1,24,0Zm0,52v12a12,12,0,0,1-24,0V164a12,12,0,0,1,24,0Zm40,0v12a12,12,0,0,1-24,0V164a12,12,0,0,1,24,0Z"></path></svg>
              <span className="grow ms-6">
                <span
                    className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Localidade</span>
                <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">EXEMPLO foi a localidade encontrada com base no CEP inserido.</span>
              </span>
            </span>
                                </button>

                                <button type="button"
                                        className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3"
                                        aria-controls="tabs-with-card-3" role="tab">
            <span className="flex">

                <svg
                    className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                    xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" fill="currentColor"
                    viewBox="0 0 256 256"><path
                    d="M248.92,104l-36-40A12,12,0,0,0,204,60H140V32a12,12,0,0,0-24,0V60H40A20,20,0,0,0,20,80v64a20,20,0,0,0,20,20h76v60a12,12,0,0,0,24,0V164h64a12,12,0,0,0,8.92-4l36-40A12,12,0,0,0,248.92,104Zm-50.26,36H44V84H198.66l25.2,28Z"></path></svg>
              <span className="grow ms-6">
                <span
                    className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Bairro</span>
                <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">EXEMPLO foi o bairro encontrado com base no CEP inserido.</span>
              </span>
            </span>
                                </button>
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

                                    <div id="tabs-with-card-2" className="hidden" role="tabpanel"
                                         aria-labelledby="tabs-with-card-item-2">
                                        <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                                             src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                                             alt="Image Description"/>
                                    </div>

                                    <div id="tabs-with-card-3" className="hidden" role="tabpanel"
                                         aria-labelledby="tabs-with-card-item-3">
                                        <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                                             src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                                             alt="Image Description"/>
                                    </div>
                                </div>

                                <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                                    <svg className="w-16 h-auto text-orange-500" width="121" height="135"
                                         viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                                              stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                                        <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                                              stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                                        <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                                              stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                                    </svg>
                                </div>
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
                <nav className="max-w-6xl mx-auto grid sm:flex gap-y-px sm:gap-y-0 sm:gap-x-4" aria-label="Tabs" role="tablist">
                    <DataCard type='CEP' data={123}/>
                    <DataCard type='Logradouro' data={123}/>
                    <DataCard type='DDD' data={123}/>
                </nav>
            </div>

            <Footer/>
        </main>
    )
}
