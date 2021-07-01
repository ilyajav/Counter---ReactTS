
export type InitialStateType = typeof initialState

type ChangeMaxValueStringActionCreator = {
    type: 'CHANGE-MAX-VALUE-STRING',
    value: string
}
type ChangeMinValueStringActionCreator = {
    type: 'CHANGE-MIN-VALUE-STRING',
    value: string
}
type SetCounterActionsType = ChangeMaxValueStringActionCreator | ChangeMinValueStringActionCreator

const initialState = {
    maxValueString: '1',
    minValueString: '0'
}

export const setCounterReducer = (state: InitialStateType = initialState, action: SetCounterActionsType): InitialStateType => {
    switch (action.type) {
        case 'CHANGE-MAX-VALUE-STRING':
            return {
                ...state,
                maxValueString: state.maxValueString = action.value
            }
        case 'CHANGE-MIN-VALUE-STRING':
            return {
                ...state,
                minValueString: state.minValueString = action.value
            }
        default:
            return state
    }
}

export const changeMaxValueStringAC = (value: string): ChangeMaxValueStringActionCreator => {
    return {
        type: 'CHANGE-MAX-VALUE-STRING',
        value
    } as const
}

export const changeMinValueStringAC = (value: string): ChangeMinValueStringActionCreator => {
    return {
        type: 'CHANGE-MIN-VALUE-STRING',
        value
    } as const
}

