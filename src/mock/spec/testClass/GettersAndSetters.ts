class ParentGettersAndSetters {
	private _prop0: string;
	get prop0() {
		return this._prop0;
	}
	set prop0(v: string) {
		if(typeof v === 'function') {
			throw new Error('Trying to set jasmine spy');
		}
		this._prop0 = v;
	}

}

export class GettersAndSetters extends ParentGettersAndSetters {
	private _prop1: string;
	get prop1() {
		return this._prop1;
	}
	set prop1(v: string) {
		if(typeof v === 'function') {
			throw new Error('Trying to set jasmine spy');
		}
		this._prop1 = v;
	}
}
