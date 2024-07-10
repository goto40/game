import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;

    constructor ()
    {
        super({
            key: "Game",
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

        this.background = this.add.image(512, 384, 'background');

        
        const left = this.add.rectangle(0, 768/2, 50, 768, 0x663300);
        this.matter.add.gameObject(left, {isStatic: true});
        const right = this.add.rectangle(1024, 768/2, 50, 768, 0x662200);
        this.matter.add.gameObject(right, {isStatic: true});
        const ground = this.add.rectangle(1024/2, 760, 1024, 50, 0x005500);
        this.matter.add.gameObject(ground, {isStatic: true});

        const center = this.add.rectangle(512, 2*768/5, 30, 400, 0x550000);
        this.matter.add.gameObject(center, {isStatic: true, friction: 0.1});
        center.setAngle(60.0);

        this.input.on('pointermove', (e: MouseEvent) => {
            if (e.buttons!==0) {
                if (Math.random()>0.5) {
                    const circ = this.add.circle(e.x, e.y, Math.random()*10+5, 0x777777)
                    circ.setStrokeStyle(1, 0xffffff);
                    this.matter.add.gameObject(circ, {friction: 0.01});
                }
                else {
                    const rect = this.add.rectangle(e.x, e.y, Math.random()*15+10, Math.random()*15+10, 0x777777)
                    rect.setStrokeStyle(1, 0xffffff);
                    this.matter.add.gameObject(rect, {friction: 0.01});
                }
            }
        });
    }
}
