import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  async function gitData() {
    const dataRes = await fetch('https://jsonplaceholder.typicode.com/posts')
    const dataShow = await dataRes.json()
    console.log(dataShow);
  }
  gitData()
  const mianDocTrStyle = {
    height: "200px",
    width: "70vw",
    background: "white",
    color: 'black',
    margin: '5px'
  }
  return (
    <div>
      <h1>hi</h1>
      <div style={mianDocTrStyle}>
        <h2>programming</h2>
        <p>what is the new in front end dev</p>
        <p>what is the new in javascript</p>
      </div>
      <div style={mianDocTrStyle}>
        <h2>food</h2>
        <p>what is likes to eat</p>
        <p>i love food</p>
      </div>
      <div style={mianDocTrStyle}>
        <h2>sport</h2>
        <p>play sport daily</p>
      </div>
    </div>
  );
}
