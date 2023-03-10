import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    const STORAGE_KEY = "videoplayer-current-time";

    const onPlay = (e) => {
        localStorage.setItem(STORAGE_KEY, e.seconds)
    }
    player.on('timeupdate', throttle(onPlay, 1000));

    const savedTime = localStorage.getItem(STORAGE_KEY)

    player.setCurrentTime(savedTime)