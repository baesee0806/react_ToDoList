
import { useState } from 'react';
import WorkList from './component/WorkList'
import "./App.css"

function App() {

  // 유저 리스트
   const [lists,setLists] = useState([]) 
   // 추가 버튼 누를시 추가될 제목과 내용
   const [title,setTitle] = useState('')
   const [content,setContent] = useState('')
   
  //  추가 버튼
   const addListHandler =()=>{
    const newList={
      id:lists.length+1,
      title:title,
      content:content,
      complete:false,
    }
      setLists([...lists,newList])
   }
  //  삭제 버튼
   const deleteListHandler =(id)=>{
    const newContentList = lists.filter((list)=>list.id !== id)
    setLists(newContentList)
   }
  // 완료 버튼
   const completeHandler =(id)=>{
      const newCompletelist = lists.map((list)=>{if(list.id===id){return {...list,complete:list.complete?false:true,}}else{return {...list}}})
    setLists(newCompletelist);
   }
 
  // 취소 버튼

  return (
    <div  className='layout'>
      {/* 투두리스트 제목 리엑트 */}
      <div className='title'>
        <h1>My ToDo List</h1>
        <h1>React</h1>
      </div>

    {/* 추가하기 */}
      <div className='addList'>
        <div className='addList-titleContnent'>
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
        </div>
        
        <div className='addList-btn'>
        <button onClick={addListHandler}>추가하기</button> 
        </div>
        
        
                        
      </div>
      
      {/* Working */}
      <div className='workingWrap'>
        <h2>Working..🔥</h2>
        <div id='work'>
          {lists.map((list)=>{if(list.complete === false){return <WorkList deleteList={deleteListHandler} completeList={completeHandler} list={list} key={list.id}/>}
          else{return null}})}
        </div>
      </div>
      {/* Done */}
      <div className='doneWrap'>
        <h2>Done..🎉</h2>
        <div id='done'>
          {lists.map((list)=>{if(list.complete === true){return <WorkList deleteList={deleteListHandler} completeList={completeHandler} list={list} key={list.id}/>}
          else{return null}})}
        </div>
      </div>
    </div>
  );

}

export default App;

