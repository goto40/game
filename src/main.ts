import { Boot } from './scenes/Boot';
import { Game1 } from './scenes/Game1';
import { Game2 } from './scenes/Game2';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';

import { Game, Types } from "phaser";


export let serviceWorkerRegistration: ServiceWorkerRegistration|undefined = undefined;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener("message", (event) => {
    console.log(`The service worker sent me a message: ${event.data}`);
    if (event.data === 'NEW-VERSION-DETECTED') {
      console.log('trigger reinstall');
      serviceWorkerRegistration?.active?.postMessage('REINSTALL');
    }
    if (event.data === 'RESTART') {
      console.log('restart page');
      window.location.reload()
    }
  });
  navigator.serviceWorker.register('./service-worker.js').then(reg=>{
    serviceWorkerRegistration = reg;
    serviceWorkerRegistration.active?.postMessage('CHECK_FOR_NEW_VERSION');
  })
  console.log('registered service worker');
}
else {
  console.log('service worker not supported!');
}

// refresh after service worker update
let refreshing = false;
navigator.serviceWorker.addEventListener('controllerchange', () => {
  if (!refreshing) {
    console.log('new service worker detected!');
    window.location.reload()
    refreshing = true;
  }
})


//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1080,
    height: 1920,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Game1,
        Game2,
        GameOver
    ]
};

export default new Game(config);
