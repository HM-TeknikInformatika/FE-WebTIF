import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Footer } from "../../footer";

export const Kontak = () => {
    return (
        <>
            <div className="container">
                <h2 className="kontak-page-title">Kontak Kami</h2>
                <div className="kontak-page-body">
                    <table>
                        <tr>
                            <th>
                                <FaLocationDot />                            </th>
                            <th>
                                <FaPhoneFlip />
                            </th>
                            <th>
                                <IoMdMail />
                            </th>
                        </tr>
                        <tr>
                            <td>
                                Alamat
                            </td>
                            <td>
                                Kontak
                            </td>
                            <td>
                                Email
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="address" href="https://maps.app.goo.gl/pgPNZfC2NkQozUzS8" target="_blank">
                                    Semarang, Jawa Tengah
                                </a>
                            </td>
                            <td>
                                <a className="whatsapp" href="https://wa.me/6285601157055" target="_blank">
                                    085601157055
                                </a>
                            </td>
                            <td>
                                <a href="mailto:hmj.informatika@unissula.ac.id">
                                    hmj.informatika@unissula.ac.id
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div><Footer /></div>
        </>
    );
};
