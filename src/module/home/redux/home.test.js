import reducer, { increment } from './home'
const COUNTER_INCREMENT = 'COUNTER_INCREMENT'

// Test script for action
describe('Describe Actions', () => {
    it('adds +1 increment', () => {
        const expectedAction = {
            type: COUNTER_INCREMENT,
            payload: 1
        }
        expect(increment(1)).toEqual(expectedAction)
    });
});

// Test script for reducers
describe('increment reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(0)
    })

    it('should handle COUNTER_INCREMENT', () => {
        expect(
            reducer([], {
                type: COUNTER_INCREMENT,
                payload: 1
            })
        ).toEqual("1")
    })
})