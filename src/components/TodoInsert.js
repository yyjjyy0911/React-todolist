import React, { useCallback, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { styled } from 'styled-components'

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value)
  },[])

  // 버튼을 클릭하면 발생할 이벤트
  const onSubmit = useCallback((e) => {
    onInsert(value);
    setValue('');
    e.preventDefault(); // 새로고침 시 위로 올라가는 성질 막아주려고 사용
  },[onInsert, value])

  return (
    <TodoInsertWrapper onSubmit={onSubmit}>
      <input type="text"
      placeholder='할 일을 입력하세요'
      value={value}
      onChange={onChange}
      />
      <button><MdAdd /></button>
    </TodoInsertWrapper>
  )
}

const TodoInsertWrapper = styled.form`
  display: flex;
  background: #495057;

  input{
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: #fff;

    &::placeholder{
      color: #6dd2e6;
    }
    flex: 1;
  }

  button{
    background: #868296;
    outline: none;
    border: none;
    color: #fff;
    padding: 1rem;
    font-size: 1.125rem;
    cursor: pointer;
    transition: all 0.2s;
    &:hover{
      background: #adb5bd;
    }
  }
`;

export default TodoInsert