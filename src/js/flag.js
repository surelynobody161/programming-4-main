import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources";
import { Yeat } from "./Yeat";
import { EndScene } from "./endScene";
import { GameTimer } from "./gameTimer";

export class Flag extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: Resources.Flag.width / 4,
            height: Resources.Flag.height / 4,
            collisionType: CollisionType.Passive
        });

        const collisionWidth = this.width;
        const collisionHeight = this.height;
        this.collider.useBoxCollider(collisionWidth, collisionHeight);
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Flag.toSprite());
        this.graphics.current.scale = new Vector(0.25, 0.25);

        this.on('collisionstart', (evt) => {
            if (evt.other instanceof Yeat) {
                const gameTimer = engine.currentScene.actors.find(actor => actor instanceof GameTimer);
                const elapsedTime = gameTimer.getElapsedTime();
                engine.goToScene('end', { elapsedTime });
            }
        });
    }
}
