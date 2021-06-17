import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // 요청받은 정보를 담는 변수 선언
  const [ testStr, setTestStr] = useState('');

  // 변수 초기화
  function callback(str){
    setTestStr(str);
  }

  // 첫번째 렌더링을 다 마친 후 실행
  useEffect(
		() => {
		axios({
			url: '/hello',
			method: 'GET'
		}).then((res) => {
			callback(res.data);
		})
		}, []
  );

  return (
    <div className="App">
      <header className="App-header">
		  aaa xxxxxxxxffdsdf saaa
		  {testStr}
      </header>
    </div>
  );
}

export default App;
