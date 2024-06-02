import '../css/style.css';
import { Engine, DisplayMode, Vector, Input } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { levelOne } from './levelOne.js';
import { EndScene } from './endScene.js';
import { IntroScreen } from './introScreen.js';

const options = {
    displayMode: DisplayMode.FillScreen,
    width: 1024,
    height: 720,
    physics: {
        gravity: new Vector(0, 800),
        enable: true
    }
};

class Game extends Engine {
    constructor() {
        super(options);
        this.start(ResourceLoader).then(() => {
            this.initializeGame();
        }).catch(err => {
            console.error("Error loading resources:", err);
        });
    }

    initializeGame() {
        const introScreen = new IntroScreen();
        const levelOneScene = new levelOne();

        this.addScene('intro', introScreen);
        this.addScene('levelOne', levelOneScene);

        this.goToScene('intro');
    }

    goToScene(sceneKey, params = {}) {
        if (sceneKey === 'end') {
            const endScene = new EndScene(params.elapsedTime);
            this.addScene('end', endScene);
        }
        super.goToScene(sceneKey);
    }
}

new Game();
