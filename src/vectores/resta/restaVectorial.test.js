import restaVectorial from "./restaVectorial";

describe('Resta de 2 vectores', () => {
  it('deberia restar dos vectores', () => {
    expect(restaVectorial([3, 3], [-3, -3])).toEqual([6, 6]);
  });
});
