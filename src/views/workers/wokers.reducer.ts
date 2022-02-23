import { WorkerModel } from './../../core/types/models';
import { Action } from "../../core/types/models";

export function search(collection: any[], filters: { [k: string]: any }) {

    if (!collection.length || !Object.keys(filters).length) return collection;

    return collection.filter((el) => {
        for (const key in filters) {
            const filter = filters[key]?.toString().toLowerCase();
            const value = el[key]?.toString().toLowerCase();
            if (!value?.includes(filter)) return false;
        }
        return true;
    })

}


interface WorkersState {
    workers: any[];
    total: number;
}

export const WorkersReducer = (state: WorkersState, action: Action): WorkersState => {
    switch (action.type) {
        case 'save':

            return { ...state, workers: action.payload}

        case 'search':

            debugger;
            return {...state}

        default:
            break;
    }
    return state;
}
