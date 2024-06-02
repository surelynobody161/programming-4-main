import { Scene, Vector, Timer } from "excalibur";
import { Yeat } from './Yeat.js';
import { Background } from './backGround.js';
import { Platform } from './platform.js';
import { Flag } from './flag.js';
import { Lean } from './lean.js';
import { GameTimer } from './gameTimer.js';

class levelOne extends Scene {
    onInitialize(engine) {
        const yeat = new Yeat();
        this.add(yeat);

        yeat.pos = new Vector(800, 1450);
        yeat.z = 3;

        engine.currentScene.camera.strategy.lockToActor(yeat);

        const leanSpawnTimer = new Timer({
            fcn: () => {
                const cameraPos = engine.currentScene.camera.pos;
                const lean = new Lean(cameraPos.x, cameraPos.y - engine.drawHeight / 2);
                this.add(lean);
            },
            interval: 2000,
            repeats: true
        });
        engine.add(leanSpawnTimer);
        leanSpawnTimer.start();

        const gameTimer = new GameTimer(engine);
        this.add(gameTimer);

        console.log("Game timer initialized");

        const background = new Background();
        this.add(background);

        const platforms = [
            new Platform(800, 1500),
            new Platform(600, 1000),
            new Platform(1000, 500),
            new Platform(400, 0),
            new Platform(1200, -500),
            new Platform(800, -1000),
        ];

        platforms.forEach(platform => {
            platform.scale = new Vector(1, 1);
            this.add(platform);
        });

        const finalPlatform = platforms[platforms.length - 1];
        const flag = new Flag(finalPlatform.pos.x, finalPlatform.pos.y - 100);
        this.add(flag);
    }
}

export { levelOne };
