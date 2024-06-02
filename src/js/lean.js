import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources";
import { Yeat } from './Yeat';

export class Lean extends Actor {
    constructor(x, y,) {
        super({
            pos: new Vector(x, y),
            width: Resources.Lean.width / 4,
            height: Resources.Lean.height / 4,
            collisionType: CollisionType.Active
        });

        this.vel = new Vector(0, 200);
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Lean.toSprite());
        this.scale = new Vector(0.25, 0.25);
    }
}
