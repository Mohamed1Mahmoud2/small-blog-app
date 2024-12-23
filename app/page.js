import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {

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
      <Link href={'/posts/front-end-posts'}>
        <div style={mianDocTrStyle}>
          <h2>programming</h2>
          <p>what is the new in front end dev</p>
          <p>what is the new in javascript</p>
        </div>
      </Link>

      <Link href={'/posts/food-posts'}>
        <div style={mianDocTrStyle}>
          <h2>food</h2>
          <p>what is likes to eat</p>
          <p>i love food</p>
        </div>
      </Link>

      <Link href={'/posts/sport-posts'}>
        <div style={mianDocTrStyle}>
          <h2>sport</h2>
          <p>play sport daily</p>
        </div>
      </Link>

    </div>
  );
}
