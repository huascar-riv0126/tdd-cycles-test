import sumaVectorial from "./sumaVectorial";

describe('Suma de 2 vectores', () => {
  it('deberia sumar dos vectores', () => {
    expect(sumaVectorial([3, 3], [-3, -3])).toEqual([0, 0]);
  });
});
