import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';

const ShareButtons = ({ title, description, shareMessage }) => {
  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="bg-transparent flex flex-col gap-2 justify-end p-2" style={{ position: 'fixed', top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
    {/* Optimize image loading - lazy loading */}
    <FacebookShareButton url={url} quote={description || shareMessage}>
      <FacebookIcon size={48} round loading="lazy" />
    </FacebookShareButton>

    {/* Optimize image loading - lazy loading */}
    <TwitterShareButton url={url} title={description || shareMessage}>
      <TwitterIcon size={48} round loading="lazy" />
    </TwitterShareButton>

    {/* Optimize image loading - lazy loading */}
    <LinkedinShareButton url={url} title={description || shareMessage}>
      <LinkedinIcon size={48} round loading="lazy" />
    </LinkedinShareButton>

    {/* Optimize image loading - lazy loading */}
    <WhatsappShareButton url={url} title={description || shareMessage}>
      <WhatsappIcon size={48} round loading="lazy" />
    </WhatsappShareButton>

    {/* Optimize image loading - lazy loading */}
    <EmailShareButton url={url} subject={title} body={description || shareMessage}>
      <EmailIcon size={48} round loading="lazy" />
    </EmailShareButton>
  </div>
  );
};

export default ShareButtons;


