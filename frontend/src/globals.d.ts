declare global {
	interface Instrument {
		instrument: string;
		owner: string;
		complete: boolean;
		cost: number;
	}

	interface InstrumentWithID extends Instrument {
		_id: string;
	}

	interface CRUD {
		CREATE: (instrument: Instrument) => Promise<void>;
		READ: () => Promise<void>;
		UPDATE: (instrument: InstrumentWithID) => Promise<void>;
		DELETE: (instrumentID: string) => Promise<void>;
	}
}

export {};
