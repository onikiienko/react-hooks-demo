# useReducer

**Файлів, що використовують `useReducer`:** 4 
**Версія React, в якій було вперше представлено хук:** 16.8

**Interface:** `const [state, dispatch] = useReducer(reducer, initialArg, init?)`

`useReducer` is a React Hook that lets you add a reducer to your component.

#### 🔍 Що таке useReducer?
`useReducer` — це setState на максималках, дозволяє керувати станом компонента за допомогою reducer. Дуже схожий до Redux чи MobX, але для локального стану компонента.

#### 🛠 Коли застосовувати useReducer?
- Складна логіка стану: коли оновлення стану залежить від багатьох умов.
- Декілька значень у стані: якщо у вас є кілька взаємозалежних станів, керувати ними через `useState` може бути громіздко.

#### 🤔 Чому useReducer використовують рідко?
1. Зайва складність для простих станів: для більшості сценаріїв достатньо useState.
2. `useReducer` менш інтуїтивний за `useState`.

Посилання:
- [Офіційна документація](https://react.dev/reference/react/useReducer)
