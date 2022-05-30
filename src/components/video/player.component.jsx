import React from "react";
import PropTypes from "prop-types";
import "./video.styles.scss";

const YoutubeEmbed = ({ embedId }) => (
  <div className='video-responsive'>
    <iframe
      width='853'
      height='480'
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1&controls=0&enablejsapi=1&loop=1`}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      title='Embedded youtube'
      scrolling='no'
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
