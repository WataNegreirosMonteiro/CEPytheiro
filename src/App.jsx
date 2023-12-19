import Banner from "./components/molecules/Banner.jsx";
import {Header} from "./components/organisms/Header.jsx";

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
                <nav className="max-w-6xl mx-auto grid sm:flex gap-y-px sm:gap-y-0 sm:gap-x-4" aria-label="Tabs"
                     role="tablist">
                    <button type="button"
                            className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active"
                            id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1"
                            role="tab">
                        <svg
                            className="flex-shrink-0 hidden sm:block h-7 w-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor"
                            viewBox="0 0 256 256">
                            <path
                                d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                        </svg>
                        <span className="mt-5">
        <span
            className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">CEP</span>
        <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">00000-000 foi o Código de Endereçamento Postal inserido.</span>
      </span>
                    </button>

                    <button type="button"
                            className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2"
                            role="tab">
                        <svg
                            className="flex-shrink-0 hidden sm:block h-7 w-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor"
                            viewBox="0 0 256 256">
                            <path
                                d="M235.92,199A8,8,0,0,1,225,195.92L155.32,72H136v8a8,8,0,0,1-16,0V72H100.68L31,195.92A8,8,0,0,1,17,188.08L82.32,72H24a8,8,0,0,1,0-16H232a8,8,0,0,1,0,16H173.68L239,188.08A8,8,0,0,1,235.92,199ZM128,112a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V120A8,8,0,0,0,128,112Zm0,56a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V176A8,8,0,0,0,128,168Z"></path>
                        </svg>
                        <span className="mt-5">
        <span
            className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Logradouro</span>
        <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">EXEMPLO foi o logradouro encontrado a partir do CEP fornecido.</span>
      </span>
                    </button>

                    <button type="button"
                            className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3"
                            role="tab">
                        <svg
                            className="flex-shrink-0 hidden sm:block h-7 w-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor"
                            viewBox="0 0 256 256">
                            <path
                                d="M216,152H168V104h48a8,8,0,0,0,0-16H168V40a8,8,0,0,0-16,0V88H104V40a8,8,0,0,0-16,0V88H40a8,8,0,0,0,0,16H88v48H40a8,8,0,0,0,0,16H88v48a8,8,0,0,0,16,0V168h48v48a8,8,0,0,0,16,0V168h48a8,8,0,0,0,0-16Zm-112,0V104h48v48Z"></path>
                        </svg>
                        <span className="mt-5">
        <span
            className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">DDD</span>
        <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">00 foi o código de Discagem direta à distância encontrado.</span>
      </span>
                    </button>
                </nav>

            </div>

            <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="text-center">
                    <div>
                        <a className="flex-none text-xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                           href="#" aria-label="Brand">CEPytheiro</a>
                    </div>

                    <div className="mt-3">
                        <p className="text-gray-500">© CEPytheiro 2022 - Desenvolvido por Wata Negreiros Monteiro.</p>
                    </div>

                    <div className="mt-3 space-x-2">
                        <a className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                           href="#">
                            <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16"
                                 height="16" fill="currentColor" viewBox="0 0 256 256">
                                <path
                                    d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
                            </svg>
                        </a>
                        <a className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
                           href="#">
                            <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16"
                                 height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    )
}
