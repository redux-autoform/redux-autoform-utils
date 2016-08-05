export default class DateLocalizer {
	static dateLocalizer;

	/**
	 * Sets the date localizer
	 * @param localizer
	 */
	static set(localizer) {
		if (!localizer) {
			throw Error('\'localizer\' should be truthy');
		}
			
		this.dateLocalizer = localizer;
	}

	/**
	 * Gets the date localizer
	 * @returns {*}
	 */
	static get() {
		if(!this.dateLocalizer) {
			throw Error('Localizer has not yet been set');
		}
		
		return this.dateLocalizer;
	}

}