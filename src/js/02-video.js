import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
    localStorage.setItem(STORAGE_KEY, e.seconds);   
}

const currentTime = localStorage.getItem(STORAGE_KEY)
if (currentTime) {
player.setCurrentTime(currentTime);
}





