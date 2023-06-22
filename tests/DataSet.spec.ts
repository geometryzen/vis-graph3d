import { createDataSet, DataSet } from "../src/index";

function custom(x: number, y: number, t: number): number {
    return Math.sin(x / 50 - t / 10) * Math.cos(y / 50 + t / 10) * 50 + 50;
}

test("DataSet", function () {
    const data = createDataSet();
    expect(data).toBeDefined();
});

test("DataSet.add", function () {
    const data: DataSet<unknown> = createDataSet();
    const steps = 25;
    const axisMax = 314;
    const tMax = 31;
    const axisStep = axisMax / steps;
    for (let t = 0; t < tMax; t++) {
        for (let x = 0; x < axisMax; x += axisStep) {
            for (let y = 0; y < axisMax; y += axisStep) {
                const value = custom(x, y, t);
                data.add([{ x: x, y: y, z: value, filter: t, style: value }]);
            }
        }
    }

    expect(data).toBeDefined();
});
