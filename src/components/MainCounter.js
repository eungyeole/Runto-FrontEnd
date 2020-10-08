import React from 'react';
import '../App.scss';
import ScrollAnimation from 'react-animate-on-scroll';

function MainCounter() {
  return (
    <div className="MainCounter">
        <div className="CounterLineR"></div>
        <div className="flexbox">
            <ScrollAnimation animateOnce="true" duration="3" animateIn="fadeIn">
            <div className="TotalUserR">
                <h2>
                    {3223}명의 사용자와 함께 하는
                    <br></br>
                    즐거운 공부시간
                </h2>
                <p>adadad</p>
            </div>
            </ScrollAnimation>
        </div>
        <div className="CounterLineL"></div>
        <div className="flexbox">
            <ScrollAnimation animateOnce="true" duration="3" animateIn="fadeIn">
            <div className="TotalUserL">
                <h2>
                    {3223}명의 사용자와 함께 하는
                    <br></br>
                    스터디 모임
                </h2>
                <p>adadad</p>
            </div>
            </ScrollAnimation>
        </div>
        <div className="CounterLineR"></div>
        <div className="flexbox">
            <ScrollAnimation animateOnce="true" duration="3" animateIn="fadeIn">
            <div className="TotalUserR">
                <h2>
                    {3223}명의 사용자와 함께 하는
                    <br></br>
                    스터디 모임
                </h2>
                <p>adadad</p>
            </div>
            </ScrollAnimation>
        </div>
    </div>
  );
}

export default MainCounter;
