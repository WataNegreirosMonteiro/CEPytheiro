import FooterTitle from "../atoms/FooterTitle.jsx";
import Author from "../atoms/Author.jsx";
import SocialMedias from "../atoms/SocialMedias.jsx";

export default function Footer() {
    return (
        <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center">
                <FooterTitle text='CEPytheiro' />
                <Author text='© CEPytheiro 2022 - Desenvolvido por Wata Negreiros Monteiro.' />

                <div className="mt-3 space-x-2">
                    <SocialMedias type='linkedin' />
                    <SocialMedias type='github' />
                </div>
            </div>
        </footer>
    )
}