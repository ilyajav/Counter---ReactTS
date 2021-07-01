export type InitialState = typeof initialState

type ChangeMaxValueActionCreator = {
    type: 'CHANGE-MAX-VALUE',
    value: number
}

type ChangeMinValueActionCreator = {
    type: 'CHANGE-MIN-VALUE',
    value: number
}

type IncreaseMinValueActionCreator = {
    type: 'INCREASE-MIN-VALE'
}

type CounterActionsTypes = ChangeMaxValueActionCreator | ChangeMinValueActionCreator | IncreaseMinValueActionCreator

const initialState = {
    maxValue: 0,
    minValue: 0,
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
                minValue: state.minValue = action.value
            }
        case 'INCREASE-MIN-VALE':
            return {
                ...state,
                minValue: state.minValue + 1
            }
        default:
            return state
    }
}

export const changeMaxValueAC = (value: number): ChangeMaxValueActionCreator => {
    return {
        type: 'CHANGE-MAX-VALUE',
        value
    }
}

export const changeMinValueAC = (value: number): ChangeMinValueActionCreator => {
    return {
        type: 'CHANGE-MIN-VALUE',
        value
    }
}

export const increaseMinValueAC = () => {
    return {
        type: 'INCREASE-MIN-VALE',
    } as const
}