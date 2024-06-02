import { Actor, Label, Color, Font, FontUnit, Vector } from 'excalibur';

export class GameTimer extends Actor {
    constructor(engine) {
        super({
            pos: new Vector(10, 10),
            anchor: new Vector(0, 0),
            z: 10000
        });
        this.label = new Label({
            text: 'Time: 0',
            pos: new Vector(0, 0),
            color: Color.White,
            font: new Font({
                family: 'Arial',
                size: 24,
                unit: FontUnit.Px
            })
        });
        this.elapsedTime = 0;
        engine.add(this.label);
    }

    onInitialize(engine) {
        this.addChild(this.label);
    }

    onPreUpdate(engine, delta) {
        this.elapsedTime += delta / 1000;
        this.label.text = `Time: ${this.elapsedTime.toFixed(2)}`;
        const cameraPos = engine.currentScene.camera.pos;
        this.label.pos = new Vector(cameraPos.x - engine.drawWidth / 2 + 10, cameraPos.y - engine.drawHeight / 2 + 10);
    }

    getElapsedTime() {
        return this.elapsedTime.toFixed(2);
    }
}
