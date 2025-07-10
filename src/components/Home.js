import {useState} from "react";

function Home() {

  const dummyMemos = [
  "📖 『어린 왕자』 - 다시 봐도 감동이에요.",
  "📕 『1984』 - 무겁지만 꼭 읽어야 할 책 같아요.",
  "📘 『데미안』 - 나를 돌아보게 했어요.",
  "📗 『미움받을 용기』 - 마음이 조금 편해졌어요.",
  ];

  const getRandomMemo = () => {
    const index = Math.floor(Math.random() * dummyMemos.length);
    return dummyMemos[index];
  };

  const [memo, setMemo] = useState(getRandomMemo());
  
  return (
    <div>
      <h1>📚 오늘의 감상 메모</h1>
      <p>{memo}</p>
      <button onClick={()=>setMemo(getRandomMemo())}>
        다른 메모 보기
      </button>
    </div>
  )
}

export default Home;