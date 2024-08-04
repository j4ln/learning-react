# Tic-Tac-Toe

Small Tic-Tac-Toe game built following the [React quick start tutorial](https://react.dev/learn/tutorial-tic-tac-toe)

## Notes

- `useState(initialState)`
  - Is a hook so can only be called at the top level of a component
  - Convention to name state variables like `[something, setSomething]` with array destructing
  - `initialState` is the default value of the state. Can be of any type. Is ignored after the initial render
  - Where type may not be inferred it can be declared with <> like so `useState<SquareValue[]>`
- Typing props
  - Props can be typed inline: `({ value, onSquareClick }: { value: SquareValue; onSquareClick: () => void; })`
  - Or with an `interface` / `type`: `({ value, onSquareClick }: SquareProps)`
- Conventional to use `onSomething` names for props which represent events and `handleSomething` for the function defentions which handle those events
- Immutability when changing state
  - By default, all child components re-render automatically when the state of a parent component changes. Including if they weren't affected by the change. Immutability makes it very cheap for components to compare whether their data has changed or not
- `key`
  - List items should always be provided with a `key` so that React can maintain state between re-renders
  - It's important that the key provided to list items is unique identifies the list item. Most of the time using an array index here is unsuitable
  - For this project as the moves will never be re-ordered, deleted, or inserted in the middle it's safe to use the move index as our key
