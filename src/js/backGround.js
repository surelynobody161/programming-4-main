import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class Background extends Actor {
    constructor() {
        super({
            z: -10000
        });
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Background.toSprite());
        this.pos = new Vector(512, 360);
        this.scale = new Vector(7, 7);
    }
}
