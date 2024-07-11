import { Scene } from 'phaser';

export class Game2 extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;

    constructor ()
    {
        super({
            key: "Game2"
        });
    }

    create ()
    {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);
        const w = this.camera.width;
        const h = this.camera.height;

        this.background = this.add.image(w/2, h/2, 'background2');
        this.background.setScale(1.25, 2.5);
    }
}
