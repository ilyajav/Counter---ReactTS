import {
    changeMaxValueAC,
    changeMinValueAC,
    counterReducer,
    increaseCounterValueAC,
    InitialState
} from "./counter-reducer";

let state: InitialState

beforeEach(() =>{
    state = {
        minValue: 5,
        maxValue: 8,
        counter: 1
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
    expect(endState.counter).toBe(endState.minValue)
})

test('increase min value', () =>{

    const action = increaseCounterValueAC()
    const endState = counterReducer(state, action)

    expect(endState.counter).toBe(2)
})
