# useOptimistic

**Файлів, що використовують `useOptimistic`:** 0.

**Версія React, в якій було вперше представлено хук:** 19.0.

**Interface:** `const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);`

`useOptimistic` is a React Hook that lets you optimistically update the UI.

Це UX хук, котрий дасть вам змогу показати хоча б щось користувачу, поки немає відповіді від сервера. В чатах такий підхід дуже популярний, коли ви відразу показуєте повідомлення, а потім видаляєте його, якщо відповідь від сервера відрізняється від вашої оптимістичної версії.

Посилання:
- [Офіційна документація](https://react.dev/reference/react/useOptimistic)
