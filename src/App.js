import TodoInsert from 'components/TodoInsert';
import TodoList from 'components/TodoList';
import TodoTemplate from 'components/TodoTemplate';
import { useCallback, useRef, useState } from 'react';
import './App.css';

function App() {
  // 가짜 데이터 => 목(Mock) 데이터
  const [todos, setTodos] = useState([
    {
      id : 1,
      text : '할일1',
      checked : true,
    },
    {
      id : 2,
      text : '할일2',
      checked : true,
    },
    {
      id : 3,
      text : '할일3',
      checked : false,
    },
  ])

  // 고유값으로 사용될 id를 useRef 사용해서 변수설정
  const nextId = useRef(4)

  // onInsert 함수
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id : nextId.current,
        text,
        checked : false,
      }
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos])

  // 항목 지우기
  const onRemove = useCallback((id)=>{
    setTodos(todos.filter((todo) => todo.id !== id))
  },[todos])

  // 체크박스 기능
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
        todo.id === id ? {...todo, checked : !todo.checked} : todo
        )
      )
  },[todos])

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
}

export default App;
