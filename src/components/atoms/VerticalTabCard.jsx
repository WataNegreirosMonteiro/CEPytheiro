import { Buildings, Flag, Signpost } from "@phosphor-icons/react";

const descriptions = {
    'Estado': 'foi a unidade federativa encontrada com base no CEP inserido.',
    'Localidade': 'foi a localidade encontrada com base no CEP inserido.',
    'Bairro': 'foi o bairro encontrado com base no CEP inserido.'
}

const icons = {
    'Estado': <Flag size={48} weight='bold' />,
    'Localidade': <Buildings size={48} weight='bold' />,
    'Bairro': <Signpost size={48} weight='bold' />
}
export default function VerticalTabCard({ type, data }) {
    const description = descriptions[type]
    const icon = icons[type]

    return (
        <button type="button"
                className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active"
                id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1"
                aria-controls="tabs-with-card-1" role="tab"
        >
            <span className="flex">
                { icon }
                <span className="grow ms-6">
                    <span
                        className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                        { type }
                    </span>
                    <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                        { data } { description }
                    </span>
                </span>
            </span>
        </button>
    )
}