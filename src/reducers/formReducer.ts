import type { Form } from "../types"

export type FormActions =
    { type: 'save-form', payload: { newForm: Form } } |
    { type: 'set-activeId', payload: { id: string } } |
    { type: 'delete-form', payload: { id: string } } |
    { type: 'delete-all' }


export type FormState = {
    activitiesForm: Form[],
    activId: string
}

const lookActivitiesStorage = (): Form[] => {
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : []
}

export const initialState: FormState = {
    activitiesForm: lookActivitiesStorage(),
    activId: ''
}

export const formReducer = (state: FormState = initialState, action: FormActions) => {
    switch (action.type) {
        case 'save-form':
            let updatedForm: Form[] = []
            if (state.activId) {
                updatedForm = state.activitiesForm.map((activity) => activity.id === state.activId ? action.payload.newForm : activity)
            }
            else {
                updatedForm = [...state.activitiesForm, action.payload.newForm]
            }
            return {
                ...state,
                activitiesForm: updatedForm,
                activeId: ''
            }
        case 'set-activeId':
            return {
                ...state,
                activId: action.payload.id
            }
        case 'delete-form':
            return {
                ...state,
                activitiesForm: state.activitiesForm.filter((item) => item.id !== action.payload.id)
            }
        case 'delete-all':
            return {
                activId: '',
                activitiesForm: []
            }
        default:
            return state
    }
}

