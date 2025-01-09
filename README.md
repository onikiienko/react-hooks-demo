# React Hooks Usage and Versions


#### Як ми жили раніше?

- Ми називали функціональні компоненти "stateless".
- Ми мали купу методів життєвого циклу в класових компонентах(componentDidMount, componentDidUpdate, componentWillUnmount). Де мали самостійно вирішувати багато речей. Досить не схоже на декларативний підхід React.
- Доводилось мати справу з HOC (Higher Order Components) та Render Props.
- Тестування класових компонентів було складнішим.

Класовий компонент:

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log(`Mounted`);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Updated`);
    }
  }

  render() {
    return <button onClick={this.increment}>{this.state.count}</button>;
  }
}
```

Функціональний компонент з Hooks:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Mounted`);
  }, []);

  useEffect(() => {
    console.log(`Updated`);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---


#### Ось список хуків, які використовуються в цьому проекті, та їх кількість використань:

| React Hook              | Usage Count | React Version |
|-------------------------|--------------|---------------|
| useState                | 624          | <span style="background-color: #ffcccc;">16.8</span>          |
| useEffect               | 290          | <span style="background-color: #ffcccc;">16.8</span>          |
| useRef                  | 214          | <span style="background-color: #ffcccc;">16.8</span>          |
| useMemo                 | 94           | <span style="background-color: #ffcccc;">16.8</span>          |
| useContext              | 89           | <span style="background-color: #ffcccc;">16.8</span>          |
| useCallback             | 38           | <span style="background-color: #ffcccc;">16.8</span>          |
| useLayoutEffect         | 6            | <span style="background-color: #ffcccc;">16.8</span>          |
| useReducer              | 4            | <span style="background-color: #ffcccc;">16.8</span>          |
| useId                   | 4            | <span style="background-color: #fff2cc;">18.0</span>          |
| useImperativeHandle     | 1            | <span style="background-color: #ffcccc;">16.8</span>          |
| useSyncExternalStore    | 1            | <span style="background-color: #fff2cc;">18.0</span>          |
| useDebugValue           | 0            | <span style="background-color: #ffcccc;">16.8</span>          |
| useDeferredValue        | 0            | <span style="background-color: #fff2cc;">18.0</span>          |
| ❌ useInsertionEffect   | 0            | <span style="background-color: #fff2cc;">18.0</span>          |
| useTransition           | 0            | <span style="background-color: #fff2cc;">18.0</span>          |
| useOptimistic           | 0            | <span style="background-color: #d9ead3;">19.0</span>          |
| useFormStatus           | 0            | <span style="background-color: #d9ead3;">19.0</span>          |
| useActionState          | 0            | <span style="background-color: #d9ead3;">19.0</span>          |