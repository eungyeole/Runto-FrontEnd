import React from 'react';
import '../../App.scss';
import MainHeader from "./MainHeader"
import MainWelcome from "./MainWelcome"
import MainFooter from "./MainFooter"
import MainCounter from "./MainCounter"
function MainPage() {
  return (
    <>
        <MainHeader></MainHeader>
        <MainWelcome></MainWelcome>
        <MainCounter></MainCounter>
        <br></br>
        <MainFooter></MainFooter>
    </>
  );
}

export default MainPage;
