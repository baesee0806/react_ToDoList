## 1일차

> ToDoList 만들기 -React

```
import { useState } from 'react';
function WorkList(props){
  return (
  <div>
    <h2>{props.list.title}</h2>
    <p>{props.list.content}</p>
    <button onClick={()=>{props.deleteList(props.list.id)}}>삭제하기</button>
    <button onClick={()=>{props.completion(props.list.id)}}>완료</button>
  </div>

  )
}

function App() {

  // 유저 리스트
   const [lists,setLists] = useState([])
   // 추가 버튼 누를시 추가될 제목과 내용
   const [title,setTitle] = useState('')
   const [content,setContent] = useState('')
   const [completion,setcompletion] = useState('')
  //  추가 버튼
   const addListHandler =()=>{
    const newList={
      id:lists.length+1,
      title:title,
      content:content,

    }
      setLists([...lists,newList])
   }
  //  삭제 버튼
   const deleteListHandler =(id)=>{
    const newContentList = lists.filter((list)=>list.id !== id)
    setLists(newContentList)
   }
  // 완료 버튼


  // 취소 버튼

  return (
    <div >
      {/* 투두리스트 제목 리엑트 */}
      <div>
        <h1>My ToDo List</h1>
        <h1>React</h1>
      </div>

    {/* 추가하기 */}
      <div>

        <label id='title'>제목</label>
        <input id='title'
        value={title}
        placeholder="제목을 입력해주세요"
        onChange={(e) => setTitle(e.target.value)}
      />
        <label id='content'>내용</label>
        <input  id='content'
        value={content}
        placeholder="내용을 입력해주세요"
        onChange={(e) => setContent(e.target.value)}
      />
        <button onClick={addListHandler}>추가하기</button>


      </div>

      {/* Working */}
      <h2>Working..🔥</h2>
      <div id='work'>
        {lists.map((list)=>{return <WorkList deleteList={deleteListHandler} completion={completionListHandler} list={list} key={list.id}/>})}

        </div>
      {/* Done */}
      <h2>Done..🎉</h2>
      <div id='done'>

      </div>
    </div>
  );

}

export default App;
```

> 구현한것

- working에 추가한 componet 보여주기 완료 !

- 삭제구현 완료

> 구현 못한것

- 완료 버튼 누를시 Done에 보여지기
- Done 부분에서 취소 버튼 누를시에 다시 working부분으로 가는것
- css

## 2일차

- 완료 버튼 누를시 Done에 보여지기
- Done 부분에서 취소 버튼 누를시에 다시 working부분으로 가는것
- css

완성!!

## 아쉬운점

- css 레이아웃 짜는게 너무 어렵다
- component 쪼개기를 어떻게 할지 모르겠다.
