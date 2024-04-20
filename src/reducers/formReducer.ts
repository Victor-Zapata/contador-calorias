import type { Form } from "../types"

export type FormActions = {
    type: 'save-form',
    payload: { newForm: Form }
}

export type FormState = {
    activitiesForm: Form[]
}

export const initialState: FormState = {
    activitiesForm: []
}

export const formReducer = (state: FormState = initialState, action: FormActions) => {
    switch (action.type) {
        case 'save-form':
            return {
                ...state,
                activitiesForm: [...state.activitiesForm, action.payload.newForm]
            }
        default:
            return state
    }
}

