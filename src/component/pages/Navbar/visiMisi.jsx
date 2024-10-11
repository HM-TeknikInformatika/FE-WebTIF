import "../../../App.css";
import { Footer } from "../../footer";
export const VisiMisi = () => {
  return (
    <div>
      <div className="visi-misi-container">
        <div className="card_VM">
          <h3>VISI</h3>
          <p>
            Menjadi program studi unggulan dalam pengembangan IPTEK di bidang
            Teknik Informatika yang berkontribusi di tingkat Internasional pada
            tahun 2024 dengan menjunjung tinggi nilai-nilai Islam serta unggul
            dalam bidang Pengembangan Perangkat Lunak, Database, Jaringan
            Komputer, Keamanan Informasi dan Data Mining.
          </p>
        </div>
        <div className="card_VM">
          <h3>MISI</h3>
          <p>
            Menyelenggarakan pendidikan dalam bidang teknik informatika untuk
            menghasilkan lulusan yang mampu beradaptasi dengan perkembangan
            IPTEK dan industri dengan tetap berlandaskan nilai-nilai Islam.
          </p>
          <p>
            Meningkatkan kualitas dan kuantitas penelitian dan publikasi
            nasional dan internasional di bidang teknik informatika. Membangun
            dan menjalin kerjasama dengan institusi, asosiasi dan industri baik
            dalam negeri maupun luar negeri untuk menunjang penyelenggaraan
            pendidikan, pengajaran, penelitian dan pengabdian kepada masyarakat.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
