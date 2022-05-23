import React from "react";
import PropTypes from "prop-types";
import "./video.styles.scss";

const YoutubeEmbed = ({ embedId }) => (
  <div className='video-responsive'>
    <iframe
      width='853'
      height='480'
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1&controls=0&rel=0`}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      title='Embedded youtube'
      frameborder='0'
      scrolling='no'
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
