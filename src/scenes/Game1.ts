import { Scene } from 'phaser';

export class Game1 extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;

    constructor ()
    {
        super({
            key: "Game1",
            physics: {
                default: 'matter',
                matter: {
                    enableSleeping: true,
                    gravity: {
                        x: 0,
                        y: 1
                    },
                    debug: {
                        showBody: false,
                        showStaticBody: false
                    }
                }
            }
        });
    }

    create ()
    {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);
        const w = this.camera.width;
        const h = this.camera.height;
        const r = 50;

        this.background = this.add.image(w/2, h/2, 'background');
        this.background.setScale(1.25, 2.5);
        
        const left = this.add.rectangle(0, h/2, 50, h, 0x663300);
        this.matter.add.gameObject(left, {isStatic: true});
        const right = this.add.rectangle(w, h/2, 50, h, 0x662200);
        this.matter.add.gameObject(right, {isStatic: true});
        const ground = this.add.rectangle(w/2, h-20, w, 50, 0x005500);
        this.matter.add.gameObject(ground, {isStatic: true});

        const center = this.add.rectangle(w/2, 2*h/5, 30, w/2, 0x550000);
        this.matter.add.gameObject(center, {isStatic: true, friction: 0.1});
        center.setAngle(60.0);

        this.input.on('pointermove', (e: MouseEvent) => {
            if (e.buttons!==0) {
                if (Math.random()>0.5) {
                    const circ = this.add.circle(e.x, e.y, Math.random()*r/2+r/5, 0x777777)
                    circ.setStrokeStyle(1, 0xffffff);
                    this.matter.add.gameObject(circ, {friction: 0.01});
                }
                else {
                    const rect = this.add.rectangle(e.x, e.y, Math.random()*r+r/2.5, Math.random()*r+r/2.5, 0x777777)
                    rect.setStrokeStyle(1, 0xffffff);
                    this.matter.add.gameObject(rect, {friction: 0.01});
                }
            }
        });
    }
}
