import {changeMaxValueAC, changeMinValueAC, counterReducer, increaseMinValueAC, InitialState} from "./counter-reducer";

let state: InitialState

beforeEach(() =>{
    state = {
        minValue: 5,
        maxValue: 8
    }
})

test('max value must be changed', () =>{

    const action = changeMaxValueAC(12)
    const endState = counterReducer(state,action)

    expect(endState.maxValue).toBe(12)
})

test('min value must be changed', () =>{

    const action = changeMinValueAC(2)
    const endState = counterReducer(state,action)

    expect(endState.minValue).toBe(2)
})

test('increase min value', () =>{

    const action = increaseMinValueAC()
    const endState = counterReducer(state, action)

    expect(endState.minValue).toBe(6)
})