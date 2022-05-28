import React from "react";
import PropTypes from "prop-types";
import "./video.styles.scss";
import YouTube from "react-youtube";

const YoutubeEmbed = ({
  embedId,
  setVideoIndex,
  setSessionId,
  videoIndex,
  sessionPayloadlength,
}) => {
  const opts = {
    playerVars: {
      controls: 0,
      disablekb: 1,
      autoplay: 1,
      // https://developers.google.com/youtube/player_parameters
      rel: 0,
      showinfo: 0,
      ecver: 2,
    },
  };

  const onReady = (event) => {
    event.target.playVideo();
  };

  const onError = (event) => {
    setSessionId("");
  };

  const onEnd = (event) => {
    console.log(event.target);
    event.target.setLoop(1);
    setSessionId("");
    setVideoIndex(videoIndex === sessionPayloadlength - 1 ? 0 : videoIndex + 1);
    event.target.playVideo();
  };

  return (
    <div className='video-responsive'>
      <YouTube
        videoId={embedId}
        opts={opts}
        onReady={onReady}
        onEnd={onEnd}
        onError={onError}
      />
    </div>
  );
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
