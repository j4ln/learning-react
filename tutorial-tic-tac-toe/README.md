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
