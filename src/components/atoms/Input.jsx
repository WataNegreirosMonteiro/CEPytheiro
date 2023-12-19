export default function ({ type, placeholder, name, id }) {
    return (
        <input
        type={ type } name={ name } id={ id }
        className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
        placeholder={ placeholder }
        />
    )
}