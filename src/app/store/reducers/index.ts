import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer
  } from '@ngrx/store';
  import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Params,
  } from '@angular/router';

  import { environment } from '../../../environments/environment';
  import * as fromRouter from '@ngrx/router-store';

  /**
   * storeFreeze prevents state from being mutated. When mutation occurs, an
   * exception will be thrown. This is useful during development mode to
   * ensure that none of the reducers accidentally mutates the state.
   */
  import { storeFreeze } from 'ngrx-store-freeze';

  /**
   * Every reducer module's default export is the reducer function itself. In
   * addition, each module should export a type or interface that describes
   * the state of the reducer plus any selector functions. The `* as`
   * notation packages up all of the exports into a single object.
   */

  import * as fromLayout from '../../core/store/reducers/layout.reducer';

  // Router State
  export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
  }

  /**
   * As mentioned, we treat each reducer like a table in a database. This means
   * our top level state interface is just a map of keys to inner state types.
   */
  export interface State {
    layout: fromLayout.LayoutState;
    router: fromRouter.RouterReducerState<RouterStateUrl>;
  }

  /**
   * Our state is composed of a map of action reducer functions.
   * These reducer functions are called with each dispatched action
   * and the current or initial state and return a new immutable state.
   */
  export const reducers: ActionReducerMap<State> = {
    layout: fromLayout.reducer,
    router: fromRouter.routerReducer,
  };

  // console.log all actions
  export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function(state: State, action: any): State {
      console.log('state', state);
      console.log('action', action);

      return reducer(state, action);
    };
  }

  /**
   * Layout Reducers
   */
  export const getLayoutState = createFeatureSelector<State, fromLayout.LayoutState>(
    'layout'
  );

  export const getShowSidenav = createSelector(
    getLayoutState,
    fromLayout.getShowSidenav
  );

    /**
   * Router Selectors
   */
  export const getRouterState = createFeatureSelector<State, fromRouter.RouterReducerState<RouterStateUrl>>('router');

  export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
      const { url } = routerState;
      const { queryParams } = routerState.root;

      let state: ActivatedRouteSnapshot = routerState.root;
      while (state.firstChild) {
        state = state.firstChild;
      }
      const { params } = state;

      return { url, queryParams, params };
    }
  }
