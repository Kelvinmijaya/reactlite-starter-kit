import React from 'react'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store';
import HomeView from './HomeView'

function setup() {
    const mockStore = configureStore();
    const props = {
        increment: jest.fn(),
        doubleAsync: jest.fn(),
        home: 0.1
    }

    const enzymeWrapper = mount(<HomeView {...props} store={mockStore({ runtime: {}, home: 0.1 })}  />)

    return {
        props,
        enzymeWrapper
    }
}


describe('Describe Views', () => {
    describe('Home Views', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper, props } = setup()

            enzymeWrapper.debug()
            expect(enzymeWrapper.find('p').hasClass('app-intro')).toBe(true)

            expect(enzymeWrapper.find('code').text()).toEqual('src/module/home/view/HomeView.js')

            // const counter = enzymeWrapper.find('Counter').props()
            // expect(counter.counter).toEqual(props.home)
            // expect(counter.doubleAsync).toEqual(props.doubleAsync)
            // expect(counter.increment).toEqual(props.increment)
        })
    })
})