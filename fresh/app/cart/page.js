import string from "./data"

export default function Cart() {

    let cart = ['Tomatoes', 'Pasta'] //funtion 안에 만든 변수는 function 안에서만 사용가능

    return (
      <div>
        <h4 className="title">Cart</h4>
        <CartItem item = {cart[0]} />
        <CartItem item = {cart[1]}/>
        <p>{string}</p>
      </div>
    )
  } 

  function CartItem(props){
    return(
    <div className="cart-item">
        <p>{props.item}</p>
        <p>$40</p>
        <p>1개</p>
    </div>    
    )
  }

  /* Component 만드는 법 
  1. function 작명(){}
  2. return(축약할 HTML)
  3. <작명 /> 넣기
  */

  /* 서버, 클라이언트 컴포넌트 
  1. server component: 아무데나 만들면 됨
  - html에 자바스크립트 기능 넣기 불가능, 로딩속도 빠름, 큰페이지
  2. client component: 파일 위에 'use client' 쓰기
  - html에 자바스크립트 기능 넣기 가능, useState, useEffect 사용가능
  */

  /* props 문법
  1. <자식 컴포넌트 작명 = "전할 데이터"/>
  2. 자식은 props.자경
  */