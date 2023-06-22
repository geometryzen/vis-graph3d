import { Graph3dOptions } from "../src/index";

test("Graph3d", function () {
    // const data = createDataSet();
    const options: Graph3dOptions = {
        width: "600px",
        height: "600px",
        style: "surface",
        showPerspective: true,
        showGrid: true,
        showShadow: false,
        showAnimationControls: true,
        keepAspectRatio: true,
        verticalRatio: 0.5,
        animationInterval: 100, // milliseconds
        animationPreload: true,
    };
    options.animationInterval = 100;
    // const graph = createGraph3d(null, data, options);
    // expect(graph).toBeDefined();
});
