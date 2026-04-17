import { indonesiaOnlineTerms } from "../data/terms";
import { indonesiaOfflineTerms } from "../data/terms";
import { useState, useEffect } from "react";


function HomeIndo() {
  const [showModal, setShowModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [hasViewedTerms, setHasViewedTerms] = useState(false);
  const [redirectLink, setRedirectLink] = useState("");
  const [termsContent, setTermsContent] = useState("");

  const handleOpenModal = (link, terms) => {
    setRedirectLink(link);
    setTermsContent(terms);
    setTermsAccepted(false);
    setHasViewedTerms(false);
    setShowModal(true);
  };

  const handleViewTerms = () => {
    window.open("https://drive.google.com/file/d/1KOtyI8EZO42INO4Q_IeiTmBQCc_8JtTl/view?usp=sharing", "_blank");
    setHasViewedTerms(true);
  };

  const handleAccept = () => {
    if (termsAccepted) {
      sessionStorage.setItem("termsAccepted", "true");
      setShowModal(false);
      window.location.href = redirectLink;
    } else {
      alert("Harap setujui Syarat & Ketentuan untuk melanjutkan.");
    }
  };

  useEffect(() => {
    const hasAcceptedTerms = sessionStorage.getItem("termsAccepted");
    if (hasAcceptedTerms === "true") {
      setTermsAccepted(true);
    }
  }, []);

  return (
    <>
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                REGISTRATION FORM FOR INDONESIAN PARTICIPANTS
              </h1>
              <h3 className="tulisan mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Choose Categories Competition for Registration WSEEC 2026
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <a
              className="btn btn-action text-center me-lg-5 "
              onClick={() => handleOpenModal("/indo-online", indonesiaOnlineTerms)}
            >
              Online Competition<i className="fa-solid fa-earth-americas"></i>
            </a>
            <a
              className="btn btn-action text-center me-lg-5 "
              onClick={() => handleOpenModal("/indo-offline", indonesiaOfflineTerms)}
            >
              Offline Competition<i className="fa-solid fa-earth-americas"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Modal untuk Terms & Conditions */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="text-4xl">Terms & Conditions</h2>
            <div>{termsContent}</div>
            <div className="checkbox mt-2">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <label htmlFor="terms">
                  I have read and agree to the{" "}
                  <a href="#" style={{ color: "#2563eb" }} onClick={(e) => { e.preventDefault(); handleViewTerms(); }}>
                    Terms & Conditions
                  </a>.
                </label>
              {!termsAccepted && (
                <p style={{ color: "#e74c3c", fontSize: "0.85rem", marginTop: "4px" }}>
                  * Please read and agree to the Terms & Conditions first.
                </p>
              )}
            </div>
            <div className="modal-actions">
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Back
              </button>
              <button className="btn btn-primary" onClick={handleAccept}>
                Accept & Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomeIndo;
