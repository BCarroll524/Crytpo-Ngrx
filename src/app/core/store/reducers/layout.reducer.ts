import {
    LayoutActionTypes,
    LayoutActionsUnion,
} from '../actions/layout.action';

export interface LayoutState {
    showSidenav: boolean;
}

const initialState: LayoutState = {
    showSidenav: false,
};

export function reducer(
    state: LayoutState = initialState,
    action: LayoutActionsUnion
): LayoutState {
    switch (action.type) {
        case LayoutActionTypes.CloseSidenav:
            return {
                showSidenav: false,
            };
        case LayoutActionTypes.OpenSidenav:
            return {
                showSidenav: true,
            };
        default:
            return state;
    }
}

export const getShowSidenav = (state: LayoutState) => state.showSidenav;
