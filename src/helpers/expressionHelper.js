import DateLocalizer from '../localization/DateLocalizer';
import formato from 'formato';

/**
 * Utility class for expressions
 */
export default function() {
    return {
        dateLocalizer: DateLocalizer.get(),

        format: function() {
            return formato.format(...arguments);
        },

        unformat: function() {
            return formato.unformat(...arguments);
        }
    }
}