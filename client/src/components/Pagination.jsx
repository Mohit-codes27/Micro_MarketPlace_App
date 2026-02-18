const Pagination = ({ page, pages, setPage }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      {Array.from({ length: pages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          style={{
            margin: "5px",
            padding: "5px 10px",
            background: page === i + 1 ? "#111" : "#ccc",
            color: "#fff",
            border: "none",
          }}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
