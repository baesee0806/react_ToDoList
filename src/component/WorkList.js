import "./WorkList.css"

function WorkList(props){
    return (
    <div className="workList-wrap">
      
      <div className="workList-titleContent">
        <h2>{props.list.title}</h2>
        <p>{props.list.content}</p>
      </div>

      <div className="workList-btn">
        <button onClick={()=>{props.deleteList(props.list.id)}}>삭제하기</button>
        <button onClick={()=>{props.completeList(props.list.id)}}>{props.list.complete? '취소' : '완료'}</button>
      </div>
    </div>
            
    )
  }

  export default WorkList;