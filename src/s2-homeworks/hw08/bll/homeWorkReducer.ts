import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            if (action.payload === "up"){

               const sortUp = state.sort((a, b) => a.name > b.name ? 1 : -1)

                return sortUp

            } else if ( action.payload === "down"){

                const sortDown = state.sort((a,b) => a.name < b.name ? 1 : -1)

                return sortDown
            }

            return state // need to fix
        }
        case 'check': {
            const adultsUser = state.filter(el => el.age >= action.payload )
            return adultsUser // need to fix
        }
        default:
            return state
    }
}
