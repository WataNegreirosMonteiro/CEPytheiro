export default function BannerContainer({ description, button }) {
    return (
        <div className="min-w-full">
            <div
                className="bg-blue-600 bg-[url('https://preline.co/assets/svg/examples/abstract-1.svg')] bg-no-repeat bg-cover bg-center p-4 rounded-lg text-center">
                <p className="me-2 inline-block text-white">
                    { description }
                </p>
                { button }
            </div>
        </div>
    )
}