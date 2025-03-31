/*eslint-disable*/

import { useState } from 'react';
import './App.css';

function App() {

  // document.querySelector('h4').innerHTML = post; 기존의 html에서 사용하던 방법 h4 태그에 포스트 제목 삽입
  let [name, namechange] = useState(['남자 코드 추천', '여자 코트 추천', '남자 옷 추천']); // useState를 사용하여 포스트 제목을 상태로 관리
  let [like, likechange] = useState(0);


  return (
    <div className="App">
      <div className="blog-header">
        <h4>Myblog</h4>
      </div>
      <div className="list">
        <h4>{name[0]} <span onClick={ ()=>{ likechange(like+1) } }>좋아요👍</span> {like} </h4><br />
        <p>2월 17일 발행</p></div>

      <div className="list">
        <h4>{name[1]}</h4>
        <p>2월 17일 발행</p>

        <button onClick={ () => {
          let copy = [...name];
          copy[0] = '여자 코트 추천';
          namechange(copy);
         } }>버튼</button>

        </div>

        <div className="list">
        <h4>{name[2]}</h4>
        <p>2월 17일 발행</p>

        <button onClick={ () => {
          let copy1 = [...name];
          copy.sort();  // 이름 순으로 정렬렬
          namechange(copy);
        }}>정렬</button>
        </div>
    
        <Modal/>
      </div>
  );
}


function Modal() {
  return (
    <>
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>닫기</button></div>
      <div></div>
      </>
  )
}
export default App;
