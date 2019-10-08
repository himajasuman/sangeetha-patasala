import React from 'react';
import { saraliswaramulu_videos } from '../data/index';

export default () => (
  <div className="videos">
    <h4>Video Tutorials</h4>
    {
      saraliswaramulu_videos.map(video => (
        <iframe
        src={video}
        frameborder="0"
        allow="
          accelerometer;
          autoplay;
          encrypted-media;
          gyroscope;
          picture-in-picture
        "
        allowfullscreen></iframe>
      ))
    }
  </div>
);