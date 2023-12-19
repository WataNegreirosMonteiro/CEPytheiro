export default function Label({ text }) {
    return (
        <label htmlFor="hs-search-article-1" className="block text-sm text-gray-700 font-medium dark:text-white">
            <span className="sr-only">{ text }</span>
        </label>
    )
}