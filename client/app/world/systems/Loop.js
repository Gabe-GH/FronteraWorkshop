import { Clock } from "three";

const clock = new Clock();

class Loop {
    constructor(camera, scene, renderer) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updatables = [];
    }

    tick() {
        const delta = clock.getDelta();

        this.updatables.forEach((object) => {
            object.tick(delta);
        });
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            this.tick();
            this.renderer.render(this.scene, this.camera);
        })
    }

    stop() {
        this.renderer.setAnimationLoop(null);
    }
}

export { Loop }