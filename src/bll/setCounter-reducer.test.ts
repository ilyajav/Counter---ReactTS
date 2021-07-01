import {
    changeMaxValueStringAC,
    changeMinValueStringAC,
    InitialStateType,
    setCounterReducer
} from "./setCounter-reducer";


let state: InitialStateType

beforeEach(() => {
    state = {
        minValueString: '2',
        maxValueString: '6'
    }
})

test('max string value must be changed', () => {
    const action = changeMaxValueStringAC('8')
    const endState = setCounterReducer(state, action)

    expect(endState.maxValueString).toBe('8')
    expect(endState.minValueString).toBe('2')
})

test('min string value must be changed', () => {
    const action = changeMinValueStringAC('5')
    const endState = setCounterReducer(state, action)

    expect(endState.maxValueString).toBe('6')
    expect(endState.minValueString).toBe('5')
})