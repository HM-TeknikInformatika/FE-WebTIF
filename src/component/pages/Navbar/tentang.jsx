import bg from "../../../../public/assets/img/ProfileBackground.svg";
import image from "../../../../public/assets/img/ImageProfile.svg";

export const Tentang = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "auto", // Mengatur tinggi agar mengikuti konten
        minHeight: "80vh", // Menambahkan minHeight agar setidaknya 80vh di layar kecil
      }}
    >
      <div className="container d-flex mt-2 mt-sm-4 align-items-center justify-content-between gap-3">
        <div className="row w-100 align-items-center">
          <h2
            className="mb-2 mb-md-5 fs-1 fs-sm-[2.2rem] text-center text-sm-center col-12"
            style={{
              fontWeight: "600",
              color: "#003399",
            }}
          >
            Fakultas Teknologi Industri UNISSULA
          </h2>
          <div className="col-12 col-md-4 d-flex justify-content-center mb-4 mb-md-0">
            <img
              className="img-fluid"
              style={{ width: "100%", height: "auto", maxHeight: "60vh", objectFit: "contain" }}
              src={image}
              alt="foto"
            />
          </div>

          {/* Teks */}
          <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
            <p style={{ textAlign: "justify", fontSize: "1rem", lineHeight: "1.4" }}>
              Dalam rangka menunjang program pendidikan, Universitas Islam
              Sultan Agung sebagai Perguruan Tinggi Swasta yang juga merupakan
              bagian dari sistem pendidikan nasional, merasa terpanggil dan
              berkewajiban untuk ikut berpartisipasi aktif dalam mendidik
              mahasiswa agar mampu meningkatkan daya penalaran, menguasai ilmu
              pengetahuan dan teknologi, berjiwa penuh pengabdian serta memiliki
              rasa tanggung jawab yang besar terhadap masa depan bangsa dan
              negara, dengan tetap mengindahkan ciri-ciri khas Universitas Islam
              Sultan Agung serta syarat-syarat pendidikan secara umum, dalam
              upaya untuk membantu melaksanakan program pemerintah dalam
              memenuhi kebutuhan sarjana teknologi industri yang diperlukan
              dalam pembangunan industri, maka pada tahun 1993 dibuka Fakultas
              Teknologi Industri bersamaan dengan berdirinya Program Studi
              Teknik Elektro (S1) dengan SK Mendikbud No. 84/D/O/1993. Seiring
              dengan perkembangan dunia industri yang sarat akan kebutuhan
              teknologi di bidang Industri, informasi dan komputer maka
              dibukalah Program Studi Teknik Industri (S1) dengan SK Dirjen
              DIKTI No. 294/DIKTI/KEP/2000 dan tahun 2003 dibuka Program Studi
              Teknik Informatika (S1) dengan SK Dirjen DIKTI No. 1421/D/T/2003
              serta Magister Teknik Elektro (S2) dengan SK Dirjen DIKTI No.
              1637/D/T/2008.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
