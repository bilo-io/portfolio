import createCompletionPlugin from 'draft-js-autocomplete-plugin-creator';

import autocompleteSuggestionsStrategy from './findSuggestionStrategy';
import suggestionsFilter from './suggestionsFilter';
import addAutocomplete from './modifiers/add';
import AutocompleteEntry from './entry';

import './styles/autocompleteSuggestionsEntry.scss';
import './styles/autocompleteSuggestions.scss';

export const createAutocompletePlugin = (config = {}) => {
    const theme = {
        autocompleteSuggestions: 'autocompleteSuggestions'
    }
    const completionPlugin = createCompletionPlugin(
        autocompleteSuggestionsStrategy,
        addAutocomplete,
        AutocompleteEntry,
        'autocompleteSuggestions'
    )
    const configWithTheme = {
        theme,
        ...config
    }
    return completionPlugin(configWithTheme);
}

export default createAutocompletePlugin;

export const defaultSuggestionsFilter = suggestionsFilter;