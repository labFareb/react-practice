Learnings:
- In React, we do not like to touch the DOM directly. Instead, we use refs. With `React.createRef()` we can open up that
- Learnt how to uppercase in VS Code - just do CTRL + SHIFT + P and then search for 'upper'.
- The functions that are manipulating the state should be in the same component as the state.
- If we need access to the key in our components, we need to pass it a second time as a prop. `key = {key}` will not be useful here. You'll have to pass `index = {key}`.
- Use {...this.state} to pass the whole state down as a prop.
- Updating state through an input isn't straightforward. There is some magic going on there that I'll have to explore further.
- Picked up Proptypes