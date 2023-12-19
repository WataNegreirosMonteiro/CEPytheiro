import BannerContainer from "../atoms/BannerContainer.jsx";
import ButtonPill from "../atoms/ButtonPill.jsx";

export default function Banner({ description, buttonText }) {
    return <BannerContainer
            description={ description }
            button={ <ButtonPill text={ buttonText } /> }
            />
}