# React JSX con ES6

* Arrow functions
* Destructuring

```js
const Header = ({ parrafo, titulo }) => (
  <header>
    <h1>{titulo}</h1>
    <p>{parrafo}</p>
  </header>
);
```

* Spread operator

```js
const obj = {
  titulo: 'Getting Started',
  parrafo: 'Descripción'
};

ReactDOM.render(
  <Header {...obj} />,
  document.getElementById('header')
);
```
