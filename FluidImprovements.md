# UX/UI Improvements

## Verbatims

### Heatmaps

1. After Making a selection in the heatmap

- Should also be able to close the dialog
    - by clicking outside the "Selected Area Comments"
    - by having an "X" in the top right of the "modal"
    - by pressing the _"Esc"_ key
- Should see the number of responses for this selection (a simple count should do)
- Should see the full dialog on screen, and scroll through responses within modal's content area, as opposed to the entire screen
    - might look weird for very few responses, but we could just set a **css** `max-height` for the content-area of the modal

### Wordclouds

1. When clicking on a **word**, you should pull up all responses containing that **word**
    - the result should be presented similarly to Heatmaps, with the chosen word **highlighted**