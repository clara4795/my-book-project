import React, { useState } from "react";

function MyBooks() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "해리포터",
      author: "J.K. 롤링",
      status: "read",
      memo: "재밌었음!",
      rating: 5,
      startDate: "2024-01-01",
      endDate: "2024-01-10",
      createdAt: "2024-01-11",
    },
    {
      id: 2,
      title: "클린 코드",
      author: "로버트 마틴",
      status: "to-read",
      memo: "",
      rating: 0,
      startDate: "",
      endDate: "",
      createdAt: "2024-02-05",
    },
    {
      id: 3,
      title: "자바스크립트 완전정복",
      author: "홍길동",
      status: "reading",
      memo: "중반부 어려움",
      rating: 0,
      startDate: "2024-03-01",
      endDate: "",
      createdAt: "2024-03-05",
    },
    {
      id: 4,
      title: "어린 왕자",
      author: "생텍쥐페리",
      status: "read",
      memo: "인생책",
      rating: 4,
      startDate: "2023-12-20",
      endDate: "2023-12-25",
      createdAt: "2023-12-26",
    },
  ]);

  const [selectedStatus, setSelectedStatus] = useState("read");
  const [sortOption, setSortOption] = useState("latest");

  const getStatusLabel = (status) => {
    if (status === "read") return "다 읽은 책";
    if (status === "reading") return "읽는 중";
    if (status === "to-read") return "읽고 싶은 책";
  };

  const handleDelete = (id) => {
    const updated = books.filter((book) => book.id !== id);
    setBooks(updated);
  };

  const handleSort = (a, b) => {
    if (sortOption === "latest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    if (sortOption === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  };

  const filteredBooks = books
    .filter((book) => book.status === selectedStatus)
    .sort(handleSort);

  return (
    <div>
      <h1>📚 내 독서기록</h1>

      <div>
        <button onClick={() => setSelectedStatus("read")}>다 읽은 책</button>
        <button onClick={() => setSelectedStatus("reading")}>읽는 중</button>
        <button onClick={() => setSelectedStatus("to-read")}>읽고 싶은 책</button>
      </div>

      <div>
        <label>정렬: </label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="latest">최신순</option>
          <option value="rating">별점 높은 순</option>
        </select>
      </div>

      <h2>{getStatusLabel(selectedStatus)}</h2>
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <div key={book.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
            <strong>{book.title}</strong> - {book.author}
            {book.memo && <div>메모: {book.memo}</div>}
            {book.rating > 0 && <div>별점: {book.rating} / 5</div>}
            {(book.startDate || book.endDate) && (
              <div>
                기간: {book.startDate} ~ {book.endDate}
              </div>
            )}
            <div>
              <button onClick={() => alert("수정 기능은 아직 준비 중입니다.")}>수정</button>
              <button onClick={() => handleDelete(book.id)}>삭제</button>
            </div>
          </div>
        ))
      ) : (
        <p>표시할 책이 없습니다.</p>
      )}
    </div>
  );
}

export default MyBooks;
