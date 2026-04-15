

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Thankyou = () => {
  const router = useRouter();
  const [namaLengkap, setNamaLengkap] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [category, setCategory] = useState("");
  const [namasekolah, setNamaSekolah] = useState("");

  useEffect(() => {
    if (router.isReady) {
      const { namaLengkap, projectTitle, category, namasekolah } = router.query;
      setNamaLengkap(namaLengkap || "");
      setProjectTitle(projectTitle || "");
      setCategory(category || "");
      setNamaSekolah(namasekolah || "");
    }
  }, [router.isReady, router.query]);

  return (
    <>
      <section className="thankyou">
        <div>
          <h1 className="text-sm md:text-lg lg:text-4xl">
            Terima kasih telah mendaftar! Kami menghargai partisipasi Anda dan
            menantikan keterlibatan Anda.
          </h1>
          <br />
          <div className="registration-data">
            <h2>Detail Pendaftaran:</h2>
            <table>
              <tbody>
                <tr>
                  <td>Nama Lengkap</td>
                  <td>:</td>
                  <td>{namaLengkap}</td>
                </tr>
                <tr>
                  <td>Judul Proyek</td>
                  <td>:</td>
                  <td>{projectTitle}</td>
                </tr>
                <tr>
                  <td>Kategori</td>
                  <td>:</td>
                  <td>{category}</td>
                </tr>
                <tr>
                  <td>Nama Sekolah</td>
                  <td>:</td>
                  <td>{namasekolah}</td>
                </tr>
              </tbody>
            </table>
            <p className="screenshot-notice">
              Silakan ambil tangkapan layar halaman ini sebagai bukti
              pendaftaran Anda.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Thankyou;
