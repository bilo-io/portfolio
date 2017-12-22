const autocompleteSuggestionsFilter = (searchValue, suggestions) => {
    console.log(suggestions.get(0).get('id'));
    const lowerSearch = searchValue.toLowerCase();
    return suggestions.filter( suggestion => 
        String(suggestion.get('id')).startsWith(lowerSearch) || 
        suggestion.get('subject').replace(/\s+/g, '').toLowerCase().indexOf(lowerSearch) !== -1).take(5);
}

export default autocompleteSuggestionsFilter;