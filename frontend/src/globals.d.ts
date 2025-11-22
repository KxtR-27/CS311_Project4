declare global {
    interface Instrument {
        instrument: string,
        owner: string,
        complete: boolean,
        cost: number,
        _id: string,
    }
}

export {}