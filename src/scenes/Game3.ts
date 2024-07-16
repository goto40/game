import { Scene } from 'phaser';
import { LdtkJsonRootPropertiesSchema } from '../types';

export class Game3 extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;

    constructor ()
    {
        super({
            key: "Game3"
        });
    }

    preload() {
      this.load.setPath('assets');
      this.load.json('ldtk', 'nature.ldtk');
    }

    create ()
    {
      console.log("raw: %o", this.cache.json.get('ldtk'))
      const parseResult = LdtkJsonRootPropertiesSchema.safeParse(this.cache.json.get('ldtk'));
      console.log(`error:`, parseResult.error);

      this.camera = this.cameras.main;
      this.camera.setBackgroundColor(0x00ff00);
      // const w = this.camera.width;
      // const h = this.camera.height;
    }
}
