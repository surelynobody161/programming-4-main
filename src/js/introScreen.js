import { Scene, Actor, Input, Vector } from "excalibur";
import { Resources } from "./resources.js";

class IntroScreen extends Scene {
    onInitialize(engine) {

        const introImage = new Actor({
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2),
            anchor: new Vector(0.5, 0.5)
        });

        const sprite = Resources.IntroImage.toSprite();

        const imageWidth = sprite.width;
        const imageHeight = sprite.height;
        const scaleX = engine.drawWidth / imageWidth;
        const scaleY = engine.drawHeight / imageHeight;

        sprite.scale = new Vector(scaleX, scaleY);

        introImage.graphics.use(sprite);

        this.add(introImage);
        console.log('Intro image loaded and positioned');

        this.on('preupdate', () => {
            if (engine.input.keyboard.wasPressed(Input.Keys.Enter)) {
                engine.goToScene('levelOne');
            }
        });
    }
}

export { IntroScreen };
