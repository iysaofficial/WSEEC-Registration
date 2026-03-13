import Head from "next/head";
import Link from "next/link";

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
            Thank you for registering! We appreciate your participation and look
            forward to your involvement.
          </h1>
          <br />
          <div className="registration-data">
            <h2>Registration Details:</h2>
            <table>
              <tbody>
                <tr>
                  <td>Full Name</td>
                  <td>:</td>
                  <td>{namaLengkap}</td>
                </tr>
                <tr>
                  <td>Project Title</td>
                  <td>:</td>
                  <td>{projectTitle}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>:</td>
                  <td>{category}</td>
                </tr>
                <tr>
                  <td>School Name</td>
                  <td>:</td>
                  <td>{namasekolah}</td>
                </tr>
              </tbody>
            </table>
            <p className="screenshot-notice">
              Please take a screenshot of this page as proof of your
              registration.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Thankyou;
