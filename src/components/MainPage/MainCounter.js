import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function MainCounter() {
  return (
    <div className="MainCounter">
        <ScrollAnimation duration={3} animateIn="fadeIn">
        <div className="CounterLineL"></div>
        <div className="flexbox">
            <div className="TotalUserL">
                <h2>
                    {3223}명의 사용자와 함께 하는
                    <br></br>
                    즐거운 공부시간
                </h2>
                <p>adadad</p>
            </div>
        </div>
        </ScrollAnimation>
        <ScrollAnimation duration={3} animateIn="fadeIn">
        <div className="CounterLineR"></div>
        <div className="flexbox">
            <div className="TotalUserR">
                <h2>
                    {3223}명의 사용자와 함께 하는
                    <br></br>
                    스터디 모임
                </h2>
                <p>adadad</p>
            </div>
        </div>
        </ScrollAnimation>
        <ScrollAnimation duration={3} animateIn="fadeIn">
        <div className="CounterLineL"></div>
        <div className="flexbox">
            <div className="TotalUserL">
                <h2>
                    {3223}명의 사용자와 함께 하는
                    <br></br>
                    즐거운 공부시간
                </h2>
                <p>adadad</p>
            </div>
        </div>
        </ScrollAnimation>
    </div>
  );
}

export default MainCounter;
