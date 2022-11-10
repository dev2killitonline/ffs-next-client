import { useState, useEffect } from "react";

// ALL IMAGES
const IICRC = "/images/webp/IICRC-compressed.webp";
const CRI = "/images/webp/CRI-compressed.webp";
const BBB = "/images/webp/BBB-compressed.webp";
const EPA = "/images/webp/EPA-compressed.webp";
const PBC = "/images/webp/PBC-compressed.webp";
const NFIB = "/images/webp/NFIB-compressed.webp";

function CertificatesComp() {
  const certificatesArray = [
    { name: "IICRC", src: IICRC },
    { name: "CRI", src: CRI },
    { name: "BBB", src: BBB },
    { name: "EPA", src: EPA },
    { name: "PBC", src: PBC },
    { name: "NFIB", src: NFIB },
  ];

  const [path, setPath] = useState(
    certificatesArray[certificatesArray.length - 1].src
  );
  const [name, setName] = useState(
    certificatesArray[certificatesArray.length - 1].name
  );
  let i = 0;

  useEffect(() => {
    const changeImage = setInterval(imageLoop, 2500);
  }, []);

  function imageLoop() {
    if (i < certificatesArray.length) {
      setPath(certificatesArray[i].src);
      setName(certificatesArray[i].name);
    }
    if (i === certificatesArray.length - 1) {
      i = 0;
    } else {
      i++;
    }
  }

  return (
    <section className="certificates-comp__container format-text">
      <h2 className="txt-primary">Certified Professionals</h2>
      <div>
        <p>
          Our professionals are certified and have multiple years of experience.
        </p>
        <img className="certificates-comp__image" src={path} alt={name} />
      </div>
    </section>
  );
}

export default CertificatesComp;
