import { useState, useEffect } from "react";
import styles from "../styles/Ad.module.css";
import Script from 'next/script';

const Ad = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 30000); // 5 seconds delay in milliseconds

    const interval = setInterval(() => {
      setIsVisible(true);
    }, 600000); // 10 minutes in milliseconds

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className={styles.adContainer}>
          <div className={styles.adContent}>
            <span className={styles.closeButton} onClick={handleClose}>
              &times;
            </span>
            <h1 className="text-center font-bold text-4xl  py-5" style={{ color: "#40D7BC", textShadow: "2px 2px 5px #000" }} > Watch Movies Online Advertisment.</h1>
            <video src="../../official-trailer.mp4" autoPlay controls muted loop width="640" height="360" />
          </div>
        </div>
      )}
      
    </>
  );
};

export default Ad;
