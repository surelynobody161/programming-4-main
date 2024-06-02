import { Scene, Label, Color, Vector, Font, FontUnit } from "excalibur";

export class EndScene extends Scene {
    constructor(elapsedTime) {
        super();
        this.elapsedTime = elapsedTime;
    }

    onInitialize(engine) {
        const screenWidth = engine.drawWidth;
        const screenHeight = engine.drawHeight;

        const label = new Label({
            text: "You beat your lean addiction! yippi!",
            pos: new Vector(screenWidth / 2, screenHeight / 2 - 50),
            font: new Font({
                family: "Arial",
                size: 48,
                unit: FontUnit.Px,
                color: Color.White
            })
        });
        label.anchor.setTo(0.5, 0.5);

        const timeLabel = new Label({
            text: `Time: ${this.elapsedTime} seconds`,
            pos: new Vector(screenWidth / 2, screenHeight / 2 + 50),
            font: new Font({
                family: "Arial",
                size: 36,
                unit: FontUnit.Px,
                color: Color.White
            })
        });
        timeLabel.anchor.setTo(0.5, 0.5);

        this.add(label);
        this.add(timeLabel);
    }
}
