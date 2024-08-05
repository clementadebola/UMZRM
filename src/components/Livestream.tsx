import React from 'react';
import styled from 'styled-components';
import { FaVideo } from 'react-icons/fa';
import thumbnail from '../assets/cover.jpg';

const LiveStreamContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  margin-bottom: 1rem;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const LiveIcon = styled.span`
  background-color: #ff0000;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-left: 0.5rem;
`;

const ThumbnailContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LiveStream: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoUrl = "https://fb.watch/tN4ULk-4aI/";

  const handleThumbnailClick = () => {
    setIsPlaying(true);
  };

  return (
    <LiveStreamContainer>
      <h3>
        <FaVideo /> Watch Our Live Stream <LiveIcon>LIVE</LiveIcon>
      </h3>
      {isPlaying ? (
        <VideoContainer>
          <iframe
           src={`https://www.facebook.com/plugins/video.php?href=${videoUrl}&show_text=0&width=560`}
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Church Live Stream"
          ></iframe>
        </VideoContainer>
      ) : (
        <ThumbnailContainer onClick={handleThumbnailClick}>
          <Thumbnail src={thumbnail} alt="Watch Live Stream Thumbnail" />
        </ThumbnailContainer>
      )}
      <p>Join us every Sunday at 10:00 AM for our live-streamed service</p>
    </LiveStreamContainer>
  );
};

export default LiveStream;
