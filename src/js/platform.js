import { Actor, Vector, CollisionType, Shape } from 'excalibur';
import { Resources } from './resources';

export class Platform extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            collisionType: CollisionType.Fixed
        });
    }

    onInitialize(engine) {
        const sprite = Resources.Platform.toSprite();
        this.graphics.use(sprite);

        const spriteWidth = sprite.width;
        const spriteHeight = sprite.height;

        const colliderWidth = spriteWidth * 0.6;
        const colliderHeight = spriteHeight * 0.3;

        this.collider.useBoxCollider(colliderWidth, colliderHeight);
    }
}
