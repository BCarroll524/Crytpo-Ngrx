// fill out with fields returned from coin api
// all will be observables, so end with ?


// coin interface
export interface Coin {
    id?: number;
    name?: string;
    symbol?: string;
    rank?: number;
    circulating_supply?: number;
    total_supply?: number;
    quotes: { Quotes };
}

export interface Quotes {
    USD?: { Price };
}

export interface Price {
    price?: number;
    volume_24h?: number;
    market_cap?: number;
    percent_change_1h?: number;
    percent_change_24h?: number;
    percent_change_7d?: number;
}


