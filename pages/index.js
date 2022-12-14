import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [Words, setWords] = useState(null);
  var $ = (e) => {
    return document.querySelector(e);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <textarea
        placeholder="Type your zen"
        value={Words}
        onChange={function (e) {
          setWords(e.target.value);

          setInterval(function () {
            let wpm =
              e.target.value.split(" ").filter((word) => word !== "").length /
              60;

            $("h1").innerHTML = `Typing Speed: ${wpm}`;
            $("textarea").disabled = true;
          }, 60000);
        }}
        className="resize-x w-[500px] h-[350px] rounded-lg border-[1px] p-2.5 absolute left-[70%] translate-x-[-70%] mt-[30px]"
      ></textarea>
      <br />
      <h1 className="text-3xl font-bold p-2.5">Typing speed: </h1>
    </div>
  );
}
