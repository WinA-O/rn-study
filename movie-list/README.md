# memo
https://www.themoviedb.org/

파일에서 아래 것 외 나머지는 다 삭제
[index.js]
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

[App.js]
import React from 'react';

npm install axios

function App(){}을 아래로 교체
class App extends React {
  render(){

  }
}

그 위에 추가
function componentDidMount(){

}
크롬 리액트 롹장프로그램
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
