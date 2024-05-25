import { useState, useEffect } from "react";
import styles from "../styles/Ad.module.css";
import { Image } from 'cloudinary-react'

const Ads = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  useEffect(() => {
    const displayAd = () => {
      setIsVisible(true);
    };
  
    const timeout = setTimeout(() => {
      displayAd(); // display the first ad immediately
      const interval = setInterval(() => {
        displayAd(); // display subsequent ads every 10 minutes
      }, 600000);
      return () => clearInterval(interval);
    }, 50000); // 5 seconds delay before displaying the first ad
  
    return () => clearTimeout(timeout);
  }, []);
 
  
  
  
  return (
    <>
      {isVisible && (
        <div className={styles.adContainer}>
          <div className={styles.adContent}>
            <span className={styles.closeButton} onClick={handleClose}>
              &times;
            </span>
            <a href="https://www.cpagrip.com/signup.php?ref=1395513" target="_blank" rel="noopener noreferrer">
  <Image className="w-full h-full object-cover rounded-3xl border border-white shadow-md" loading="eager" src="https://www.cpagrip.com/images/cpagrip_banner.gif" />
</a>
               <h6 className="text-center font-bold text-4xl  py-5" style={{ color: "#40D7BC", textShadow: "2px 2px 5px #000" }} > You can Win Today! </h6>
               <iframe
        title="Advertisement"
        src="https://trkrspace.com/show.php?l=0&u=1395513&id=54554&tracking_id="
        width="100%"
        height="400"
        frameborder="0"
        scrolling="yes"
      ></iframe>

          
          </div>
        </div>
      )}
    </>
  );
};

export default Ads;
//{showAd && <Ad onClose={handleAdClose} />}
         