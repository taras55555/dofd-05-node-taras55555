jest.mock('express', () => {
    const mockExpress = {};
    return jest.fn(() => mockExpress);
});

test('example test', () => {
    expect(true).toBe(true);
});