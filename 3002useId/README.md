# useId

**Файлів, що використовують `useId`:** 4

**Версія React, в якій було вперше представлено хук:** 18.0

**Interface:** `const id = useId()`

`useId` is a React Hook for generating unique IDs that can be passed to accessibility attributes.


#### 🔍 Що таке useId?

Хук створює стабільний унікальний ідентифікатор, який залишається незмінним протягом усього життєвого циклу компонента.
Зручний для пар <label> та <input> та генерація унікальних id для зв’язку між елементами через aria-labelledby або aria-describedby.

Його аналогом є бібліотека `uuid` або `nanoid`.

Посилання:
- [Офіційна документація](https://react.dev/reference/react/useId)
