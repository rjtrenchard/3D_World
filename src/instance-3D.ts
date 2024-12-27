import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

class Instance3D { 
    private static _instance = new Instance3D;
    public static get instance() { return this._instance; }

    private _width: number;
    private _height: number;
    private _renderer: WebGLRenderer;
    private _camera: PerspectiveCamera;

    private readonly _scene = new Scene();

    private constructor() {
        // get window dimensions
        this._width = window.innerWidth;
        this._height = window.innerHeight;
        
        // set up renderer
        this._renderer = new WebGLRenderer({
            alpha: true,
            antialias: true
        });
        this._renderer.setPixelRatio(window.devicePixelRatio);
        this._renderer.setSize(this._width, this._height);

        // attach renderer
        const targetElement = document.querySelector<HTMLDivElement>("#app");
        if (!targetElement) throw "No #app element found.";
        targetElement.appendChild(this._renderer.domElement);
        
        // set up camera
        const aspectRatio = this._width / this._height;
        const fov = 45;
        const near = 0.1;
        const far = 1000;
        this._camera = new PerspectiveCamera(aspectRatio, fov, near, far);
        this._camera.position.set(0, 0, 3);
    }

    public render = () => { 
        requestAnimationFrame(this.render);
        this._renderer.render(this._scene, this._camera);
    }
}

export default Instance3D;