
"use client"

import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'

export default function Home() {


  const buttonMessages = [
    "Hello World",
    "Cookie",
    "For",
    "Cookie"
  ]
  return (
    <main>
      <a></a>
      {/* {buttonMessages.map((m) => 
        <CustomButton 
          message={m}
          num={3}
        />
      )} */}
      <MessageToShow />
      <h1>I AM NO LONGER PEEING</h1>
    </main>
  )
}

const list = [1,2,3,4]

const doubledList = list.map((element:number) => {
  return element * 3;
});

type CustomButtonProps = {
  /** The message inside of the button! */
  message: string;
  /** Number of times needed to click the button to win */
  num: number;
}

const CustomButton = ({message, num}: CustomButtonProps) => {
  return <button>{message}</button>;
}

const messageList = [
  "Hello",
  "World",
  "To",
  "Tommy"
]

const MessageToShow = () => {
  const [message, setMessage] = React.useState("Hello");
  const [x, setX] = React.useState(1);

  const clickHandler = () => {
    setMessage(messageList[x % messageList.length])
    console.log(x)
    setX(x+1) // x = x + 1
  }

  return (
    <div>
      <button onClick={clickHandler}>Change Message</button>
      <div>{message}</div>
    </div>
  );
}






