import React from 'react';
import styled from 'styled-components';
import { FaVideo } from 'react-icons/fa';

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

const LiveStream: React.FC = () => {
  return (
    <LiveStreamContainer>
      <h3>
        <FaVideo /> Watch Our Live Stream <LiveIcon>LIVE</LiveIcon>
      </h3>
      <VideoContainer>
        <iframe
          src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
          frameBorder="0"
          allowFullScreen
          title="Church Live Stream"
        ></iframe>
      </VideoContainer>
      <p>Join us every Sunday at 10:00 AM for our live-streamed service</p>
    </LiveStreamContainer>
  );
};

export default LiveStream;