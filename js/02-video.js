import Player from '@vimeo/player';
import _ from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// Restore playback position
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime));
}

// Save playback time to local storage, throttled to once per second
player.on('timeupdate', _.throttle(function(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000));

