import { increment } from './home'

test('adds +1 increment', () => {
    expect(increment(1)).toEqual({"type":"COUNTER_INCREMENT","payload":1});
});