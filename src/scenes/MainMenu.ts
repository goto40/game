import { Scene, GameObjects } from 'phaser';
import { version } from '../../package.json';

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        const camera = this.cameras.main;
        const w = camera.width;
        const h = camera.height;
        this.background = this.add.image(w/2, h/2, 'background');
        this.background.setScale(1.25, 2.5);

        this.title = this.add.text(512, 460, `Main Menu (${version})`, {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
