# [方案]造一个JSX模板指令(jsx-plus)

- https://github.com/peakchen90/babel-plugin-react-directives

- https://github.com/jsx-plus/babel-plugin-transform-jsx-condition
- https://github.com/jsx-plus/babel-plugin-transform-jsx-slot

- https://github.com/yandex/jsx-directives

```js
import React, { FC, useCallback, useState } from 'react';

// Создаём вспомогательный хук, для удобства
function useModel<T>(defaultValue: T) {
  const [val, setVal] = useState(defaultValue);
  // useMemo не нужен, так как объект не дойдёт до реакта
  return  {
    value: val,
    onChange: useCallback((e: any) => {
      setVal(e.target.value);
    }, []),
  };
}

// Создаём сам компонент
export const SomeComponent: FC = () => {
  const model = useModel('');
  return (
    <div>
      <input x-model={model} />
      <div>{model.value}</div>
      <div x-hide={model.value === 'hide'}>Type "hide" and this message will be removed from DOM</div>
    </div>
  );
};
```

- https://github.com/baeyun/directive-x @old

```js
const ContactList = user => { 
  return (
    <View xRepeat={contact in user.contacts}>
      <Image source={contact.avatarThumbSrc} style={styles.avatar} />
      <Link to={`/chat/${contact.id}`}>{contact.username}</Link>
    </View>
  )
}
```