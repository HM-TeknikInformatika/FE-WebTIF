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
                                <a href="">
                                    Semarang, Jawa Tengah
                                </a>
                            </td>
                            <td>
                                <a href="">
                                    08XXXXX
                                </a>
                            </td>
                            <td>
                                <a href="">
                                    email@gmail.com
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
