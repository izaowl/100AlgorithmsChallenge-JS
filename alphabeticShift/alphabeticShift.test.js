const alphabeticShift = require ('./alphabeticShift');
describe(alphabeticShift.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 'crazy';

        // act
        const response = alphabeticShift(data);

        // assert
        expect(response).toBe('dsbaz');
    });
});