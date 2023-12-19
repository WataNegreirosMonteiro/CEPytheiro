export default function FooterTitle({ text }) {
    return (
        <div>
            <a className="flex-none text-xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
               href="#" aria-label="Brand">{ text }</a>
        </div>
    )
}