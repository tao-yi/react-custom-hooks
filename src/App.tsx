import React, { useState } from 'react';
import useFetch from './hooks/useFetch';
import useLocalStorage from './hooks/useLocalStorage';
import useRandomColor from './hooks/useRandomColor';
import useTodos from './hooks/useTodos';
import useToggle from './hooks/useToggle';
import useUpdateEffect from './hooks/useUpdateEffect';
import useUpdateLogger from './hooks/useUpdateLogger';

function App() {
  const [name, setName] = useLocalStorage("name", "")
  const { setId, todo } = useTodos()
  const { color, changeColor } = useRandomColor()
  const { data, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1')
  const [toggle, setToggle] = useToggle(false)

  const [count, setCount] = useState(1)
  useUpdateEffect(() => {
    alert(count)
  }, [count])

  useUpdateLogger(name)

  return (
    <div style={{ backgroundColor: `#${color}`, height: '200px' }}>
      <div>
        count: {count}
        <button onClick={e => setCount(count + 1)}>Increment</button>
      </div>
      <div>
        <button onClick={setToggle}>Toggle</button>
        {"toggle " + toggle}
      </div>
      <div>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {data && <div>{JSON.stringify(data)}</div>}
      </div>
      <br />
      <button onClick={changeColor}>Change Color</button>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder={`${todo?.id}`}
        onChange={e => setId(parseInt(e.target.value))}
      />
      <div>
        {todo ? JSON.stringify(todo) : "no result"}
      </div>
    </div >
  );
}

export default App;
