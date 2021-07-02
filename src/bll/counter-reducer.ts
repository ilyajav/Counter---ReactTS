
export type InitialState = typeof initialState



type CounterActionsTypes = ReturnType<typeof changeMinValueAC> | ReturnType<typeof changeMaxValueAC> | ReturnType<typeof increaseCounterValueAC>

const initialState = {
    maxValue: 1,
    minValue: 0,
    counter: 0,
}

export const counterReducer = (state: InitialState = initialState, action: CounterActionsTypes): InitialState => {
    switch (action.type) {
        case 'CHANGE-MAX-VALUE':
            return {
                ...state,
                maxValue: state.maxValue = action.value
            }
        case 'CHANGE-MIN-VALUE':
            return {
                ...state,
                minValue: state.minValue = action.value,
                counter: state.counter = state.minValue
            }
        case 'INCREASE-COUNTER-VALUE':
            return {
                ...state,
                counter: state.counter + 1
            }
        default:
            return state
    }
}

export const changeMaxValueAC = (value: number) => {
    return {
        type: 'CHANGE-MAX-VALUE',
        value
    } as const
}

export const changeMinValueAC = (value: number) => {
    return {
        type: 'CHANGE-MIN-VALUE',
        value
    } as const
}

export const increaseCounterValueAC = () => {
    return {
        type: 'INCREASE-COUNTER-VALUE',
    } as const
}