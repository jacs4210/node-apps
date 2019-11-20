const sumar = require("./sumar");

test("adds 1 + 2 to equals 3", () => {
    expect(sumar(1, 2)).toBe(3);
});