import { createSelector } from '@ngrx/store';
// Import root
import * as fromRoot from '../../../store';
// Import the feature reducer
import * as fromFeature from '../reducers';
// Import individual reducers
import * as fromCoins from '../reducers/coins.reducer';

// Coins state
export const getCoinsStateSlice = createSelector(
    fromFeature.getCoinsState,
    (state: fromFeature.CoinState) => state.coins
);

// Coins entities
export const getCoinsEntities = createSelector(
    getCoinsStateSlice,
    fromCoins.getCoinsEntities
);
export const getCoinsArray = createSelector(
    getCoinsEntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[id]);
    }
);
