import { HashStraight, MapPin, RoadHorizon } from "@phosphor-icons/react";

const descriptions = {
    'CEP' : 'foi o Código de Endereçamento Postal inserido.',
    'Logradouro' : 'foi o logradouro encontrado a partir do CEP fornecido.',
    'DDD' : 'foi o código de Discagem direta à distância encontrado.'
}

const icons = {
    'CEP' : <MapPin size={24} weight="bold"/> ,
    'Logradouro' : <RoadHorizon size={24} weight="bold" /> ,
    'DDD' : <HashStraight size={24} />
}
export function DataCard({ type, data }) {
    const description = descriptions[type]
    const icon = icons[type]

    return (
        <button
        type="button"
        className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active"
        id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1"
        role="tab"
        >
            { icon }
            <span className="mt-5">
                <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">{ type }</span>
                <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">{data} { description }</span>
            </span>
        </button>
    )
}