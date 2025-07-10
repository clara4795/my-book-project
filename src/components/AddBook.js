import { useState } from "react";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("to-read");
  const [memo, setMemo] = useState("");
  const [rating, setRating] = useState(3);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      status,
      memo,
      rating,
      startDate,
      endDate,
    };
    console.log("📚 등록된 책 정보:", newBook);

    setTitle("");
    setAuthor("");
    setStatus("to-read");
    setMemo("");
    setRating(3);

  };

  return (
    <div>
      <h1>📘 새 책 등록</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목</label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>저자</label><br />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div>
          <label>상태</label><br />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="to-read">읽고 싶은 책</option>
            <option value="reading">읽는 중</option>
            <option value="read">다 읽은 책</option>
          </select>
          {(status === "reading" || status === "read") && (
            <div>
              <label>읽은 기간</label><br />
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <span> ~ </span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          )}

        </div>

        <div>
          <label>감상 메모</label><br />
          <textarea
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            rows={5}
          />
        </div>

        <div>
          <label>별점 (1~5)</label><br />
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
          />
        </div>

        <button type="submit">책 등록</button>
      </form>
    </div>
  );
}

export default AddBook;

