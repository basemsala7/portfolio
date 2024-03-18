"use client";
import "./pdf.css";
import { FiDownload } from "react-icons/fi";

const Pdf = () => {
  const downloadPdf = () => {
    const pdfUrl = "Basem-Salah-El-sayed_.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Basem-Salah-El-sayed_.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <button onClick={downloadPdf} id="pdfBtn">
      <p>My Resume</p> <FiDownload />{" "}
    </button>
  );
};

export default Pdf;
