import { Actor, Vector, Keys, CollisionType, range, Animation, SpriteSheet } from "excalibur";
import { Resources } from "./resources";
import { Platform } from "./platform";
import { Flag } from "./flag";

export class Yeat extends Actor {
    constructor() {
        super();
        this.body.collisionType = CollisionType.Active;
        this.isOnGround = false;
        this.graphics.use(Resources.Yeat.toSprite());
        this.body.mass = 10;
        this.vel = new Vector(0, 0);
        this.scale = new Vector(0.18, 0.18);
    }

    onInitialize(engine) {
        const spritesheet = SpriteSheet.fromImageSource({
            image: Resources.Yeat,
            grid: {
                rows: 1,
                columns: 2,
                spriteWidth: Resources.Yeat.width / 2,
                spriteHeight: Resources.Yeat.height / 0.95
            }
        });
        this.animation = Animation.fromSpriteSheet(spritesheet, range(0, 1), 350);
        this.collider.useBoxCollider(300, 300);

        this.on('collisionstart', (event) => {
            if (event.other instanceof Platform) {
                this.isOnGround = true;
            } else if (event.other instanceof Flag) {
                console.log("Collided with flag!");

            }
        });

        this.on('collisionend', (event) => {
            if (event.other instanceof Platform) {
                this.isOnGround = false;
            }
        });

        this.graphics.use(this.animation);
    }

    onPreUpdate(engine, delta) {
        if (engine.input.keyboard.isHeld(Keys.ArrowRight)) {
            this.body.applyLinearImpulse(new Vector(15 * delta, 0));
        }

        if (engine.input.keyboard.isHeld(Keys.ArrowLeft)) {
            this.body.applyLinearImpulse(new Vector(-15 * delta, 0));
        }

        if (engine.input.keyboard.wasPressed(Keys.ArrowUp) && this.isOnGround) {
            this.body.applyLinearImpulse(new Vector(0, -900 * delta));
            this.isOnGround = false;
        }
    }
}
