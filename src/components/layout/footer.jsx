import footerBg from "../../assets/footer.svg";

const Footer = () => {
    return (
        <>
            <footer className="relative w-full bg-black">
                {/* Use an <img> instead of background-image */}
                <img
                    src={footerBg}
                    alt="Footer background"
                    className="w-full h-auto block"
                    style={{ objectFit: "contain" }} // ensures full image is visible without cropping
                />
            </footer>

        </>
    )
}

export default Footer;