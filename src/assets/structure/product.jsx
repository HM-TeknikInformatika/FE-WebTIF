import defaultImage from "../../../public/assets/img/Logo.png";

export const Product = (props) => {
    return (
        <div className="desc-struktur">
            <img src={props.img || defaultImage} alt="Image Profile" />
            <h1>{props.name}</h1>
            <p className="job">{props.job}</p>
            {/* <button>Lihat Profil</button> */}
        </div>
    )
}