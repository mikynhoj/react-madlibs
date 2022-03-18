### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it? Popular, powerful front-end framework developed and sponsored by Facebook. Makes it easy to make reusable "view components" that can encapsulate logic and HTML into a class.

- What is Babel? It is a toolchain that is mainly used to convert ECMAScript 2015+ code into backwards compatible version of JS in current and older browsers or environments. 

- What is JSX? HTML embedded in JavaScript language for React components.

- How is a Component created in React? creating a function and ReactDOM.rendering them

- What are some difference between state and props? Prop has data passed to a component (or found via defaults) and immutable; component cannot change its own props. State is data specific to a component and can change.

- What does "downward data flow" refer to in React? "Smart" parent components with simpler child components that execute functional components that are passed through them.

- What is a controlled component? Components that will automatically update the state

- What is an uncontrolled component? When React is not in control of the form state, this is called an uncontrolled component

- What is the purpose of the `key` prop when rendering a list of components? Keys help React identify which items are changed/added/removed

- Why is using an array index a poor choice for a `key` prop when rendering a list of components? It may cause performance problems or bugs with component state

- Describe useEffect.  What use cases is it used for in React components? It is used for state changes for React components

- What does useRef do?  Does a change to a ref value cause a rerender of a component? Use it to run something once during a state change

- When would you use a ref? When wouldn't you use one? When you need to access an HTMLElement to make usre of a Web API or to integrate some other JS library. We should not use ref to access the DOM and make changes to toggle classes, set text, etc.

- What is a custom hook in React? When would you want to write one? Custom hooks are used for abstract logic, handle repeated tasks and generating JSX code
