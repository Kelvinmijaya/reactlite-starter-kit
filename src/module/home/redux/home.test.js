import { increment } from './home'

test('adds +1 increment', () => {
    const expectedAction = {
        type: "COUNTER_INCREMENT",
        payload: 1
    }
    expect(increment(1)).toEqual(expectedAction)
});