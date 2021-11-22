import React from 'react';
import Sound from 'react-sound';

class Sounds extends React.Component {
    
render() {
    return (
      <Sound
        url="come-on-boy-8018.mp3"
        autoPlay={true}
        playFromPosition = {300}
        playStatus={Sound.status.PLAYING}
        useHTML5Audio={true}
        loop={true}
        autoLoad={true}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
        ignoreMobileRestrictions={true}
      />
    );
  }
};
export default Sounds