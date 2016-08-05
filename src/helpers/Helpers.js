export default class Helpers {
	
	/**
	 * Returns the datetime format given the format specified in the metadata and the settings from the localizer
	 * @param metadata
	 * @param localizer
	 */
	static getFormat(metadata, localizer) {
		if (!metadata) throw Error('\'metadata\' should be truthy');
		if (!localizer) throw Error('\'localizerFormats\' should be truthy');

		if(metadata.format) {
			return metadata.format;
		} else {
			switch(metadata.type) {
				case 'date':
					return localizer.formats.date;
				case 'time':
					return localizer.formats.time;
				case 'datetime':
					return localizer.formats.default;
				default:
					throw Error(`Unsupported type: ${metadata.type}`);
			}
		}
	}
	
	static getDisplayName(displayName, name) {

		if(displayName == null) {
			return null;
		} else if(displayName == undefined || displayName == '') {
			return name;
		}

		return displayName;
	}
}