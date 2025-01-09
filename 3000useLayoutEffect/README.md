# useLayoutEffect

Файлів, що використовують `useLayoutEffect`: 6
Версія React, в якій було вперше представлено хук: 16.8

Interface: `useLayoutEffect(setup, dependencies?)`

`useLayoutEffect` is a version of useEffect that fires before the browser repaints the screen.

#### 🔍 Що таке useLayoutEffect?

Магія, що прибирає мерехтіння🪄 `useLayoutEffect` — це хук, схожий на `useEffect`, але з важливими відмінністями:
- викликається **синхронно**
- після рендеру, але **до** відображення змін на екрані.

У функціональних компонентах замінює метод життєвого циклу componentDidMount та componentDidUpdate.

#### 🤔 Чому useLayoutEffect використовують рідко?
- Можливість блокування основного потоку. Синхронність може уповільнити рендеринг, особливо якщо виконувати важкі обчислення.
- Більшість випадків покриває useEffect. Лише рідко потрібно синхронізувати DOM до відображення.

Посилання:
- [Офіційна документація](https://react.dev/reference/react/useLayoutEffect)