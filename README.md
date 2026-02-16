# Search

## Tasks

1. Review the `getArtists` function in `getArtists.ts` to understand how it loads data.
2. Create a `searchArtists` function that uses the `getArtists` function and manages loading state.
3. Use `searchArtists` to get the full list of artists on mount.
4. Display the results in cards.
5. Display a loading indicator.
6. Listen to the `"resize"` event to display only the first 3 results on mobile devices (`window.innerWidth` < 600px).
7. Create a form that allows users to search for artists using the same `searchArtists` function on submission.
8. Ensure cards do not re-render unnecessarily when user types into the search input before submission.
9. Add a reset button to clear the search query and reload the full list of artists with `searchArtists`.

## Guidelines

- Use fully controlled form components
- Strictly follow all rules of hooks
- Use fully typesafe patterns
- Avoid large components and long code files
- Remove orphaned listeners
