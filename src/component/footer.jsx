import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import footerImage from "/public/assets/img/Logo.png"


export const Footer = () => {
    return (
        <>
            <footer className="footer-page">
                <div className="container footer-body">
                    <div className="footer-image">
                        {/* logo */}
                    <img src={footerImage} alt="" />
                    {/* nama */}
                    <h2>HM TIF <br />UNISSULA</h2>
                    {/* sosmed */}
                    </div>
                    <div className="social-media">
                        <p>Sosial media Kami</p>
                        <a className="whatsapp" href="https://wa.me/6285601157055" target="_blank">
                        <FaWhatsapp />
                        </a>
                        <a className="tiktok" href="https://www.tiktok.com/@hm_tifunissula?is_from_webapp=1&sender_device=pc">
                            <FaTiktok />
                        </a>
                        <a className="instagram" href="https://www.instagram.com/hmtif_unissula/">
                            <FaInstagram />
                        </a>
                        <a className="youtube" href="https://www.youtube.com/@hmtifunissula">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
                <div className="container copyright-body">
                    {/* list */}
                    <div className="">
                        <p>&copy; 2024 HM TIF Unissula. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};
