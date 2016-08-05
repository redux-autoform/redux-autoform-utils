export default class NumberLocalizer {
	static numberLocalizer;
	
	static set(localizer) {
		if (!localizer) throw Error('\'localizer\' should be truthy');
		this.numberLocalizer = localizer;
	}
	
	static get() {
		if(!this.numberLocalizer) throw Error('Localizer has not yet been set');
		
		return this.numberLocalizer;
	}
}