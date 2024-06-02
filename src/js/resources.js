import { ImageSource, Loader } from 'excalibur';

const Resources = {
    Yeat: new ImageSource('images/Untitled_design-removebg-preview.png'),
    Background: new ImageSource('images/platformerBackground.jpg'),
    Platform: new ImageSource('images/platform2-removebg-preview.png'),
    Flag: new ImageSource('images/eindvlag-removebg-preview.png'),
    Lean: new ImageSource('images/lean.png'),
    IntroImage: new ImageSource('images/introscreen.png')
};

const ResourceLoader = new Loader([
    Resources.Yeat,
    Resources.Background,
    Resources.Platform,
    Resources.Flag,
    Resources.Lean,
    Resources.IntroImage
]);

export { Resources, ResourceLoader };
