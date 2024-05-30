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
    // <div className="bg-transparent flex flex-col gap-2 justify-end p-2">
    //   <FacebookShareButton url={url} quote={description || shareMessage}>
    //     <FacebookIcon size={48} round />
    //   </FacebookShareButton>

    //   <TwitterShareButton url={url} title={description || shareMessage}>
    //     <TwitterIcon size={48} round />
    //   </TwitterShareButton>

    //   <LinkedinShareButton url={url} title={description || shareMessage}>
    //     <LinkedinIcon size={48} round />
    //   </LinkedinShareButton>

    //   <WhatsappShareButton url={url} title={description || shareMessage}>
    //     <WhatsappIcon size={48} round />
    //   </WhatsappShareButton>

    //   <EmailShareButton url={url} subject={title} body={description || shareMessage}>
    //     <EmailIcon size={48} round />
    //   </EmailShareButton>
    // </div>
    <div className="bg-transparent flex flex-col gap-2 justify-end p-2" style={{ position: 'fixed', top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
    {/* Optimize image loading */}
    <FacebookShareButton url={url} quote={description || shareMessage}>
      <FacebookIcon size={48} round priority />
    </FacebookShareButton>

    {/* Optimize image loading */}
    <TwitterShareButton url={url} title={description || shareMessage}>
      <TwitterIcon size={48} round priority />
    </TwitterShareButton>

    {/* Optimize image loading */}
    <LinkedinShareButton url={url} title={description || shareMessage}>
      <LinkedinIcon size={48} round priority />
    </LinkedinShareButton>

    {/* Optimize image loading */}
    <WhatsappShareButton url={url} title={description || shareMessage}>
      <WhatsappIcon size={48} round priority />
    </WhatsappShareButton>

    {/* Optimize image loading */}
    <EmailShareButton url={url} subject={title} body={description || shareMessage}>
      <EmailIcon size={48} round priority />
    </EmailShareButton>
  </div>
  );
};

export default ShareButtons;


