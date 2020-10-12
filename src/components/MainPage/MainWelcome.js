import React from 'react';
import Typist from 'react-typist';

function App() {

  return (
    <div className="MainWelcome">
        <div className="MainWelcome-contents">
            <h1>
            <Typist speed={0.1} cursor={{show: true, hideWhenDone: true, hideWhenDoneDelay: 0} }>
                차별없는 교육플랫폼
                <br/>
                서비스, <b>런투</b>
            </Typist>
            </h1>
            <p>지금 스터디와 공부를 시작해보세요.</p>
            <button>runto 시작하기</button>
        </div>
    </div>
  );
}

export default App;
