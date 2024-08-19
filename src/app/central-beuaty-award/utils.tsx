// import { useRef, useEffect } from "react";

// export var audio = new Audio('/MICROSITES_CREaiVE/mp3/click.mp3');


import { Audio } from 'ts-audio';

export const audio = Audio({
  file: '/MICROSITES_CREaiVE/mp3/click.mp3',
  loop: true,
  volume: 1,
});



export const AudioFunction = () => {
  if(typeof audio !== "undefined") {
    // audio.play();
  }
}