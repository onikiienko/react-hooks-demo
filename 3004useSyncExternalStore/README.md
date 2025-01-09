# useSyncExternalStore

Файлів, що використовують `useSyncExternalStore`: 1
Версія React, в якій було вперше представлено хук: 18.0

Interface: `const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)`

`useSyncExternalStore` is a React Hook that lets you subscribe to an external store.

Хук, котрим варто користуватися, коли потрібна підписка на зовнішнє джерело даних. Як от:
- Сторонні бібліотеки для управління станом, які зберігають стан поза React. Наприклад Redux, Zustand, MobX.
- API браузера, які надають змінювані значення та події для підписки на їх зміни.

Посилання:
- [Офіційна документація](https://react.dev/reference/react/useSyncExternalStore)