import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PostItem from "./PostItem";
import { usePagination } from "react-use-pagination";

function Posts() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://api.massrelevance.com/MassRelDemo/kindle.json")
      .then((res) => {
        const data = res.data;
        setItems(data);
      });
  }, []);

  const {
    currentPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    nextEnabled,
    previousEnabled,
    startIndex,
    endIndex,
  } = usePagination({ totalItems: items.length, initialPageSize: 4 });

  // const arr = items.slice(0, 3);
  const arr = items.slice(startIndex, endIndex);
  console.log(items[0]);

  return (
    <div className="flex flex-col items-center mb-4">
      <PostItem item={arr} />

      <div className="mt-6 flex justify-around w-full items-center">
        <button
          className="btn btn-active btn-accent"
          onClick={setPreviousPage}
          disabled={!previousEnabled}
        >
          prev
        </button>
        <span>
          {currentPage + 1} of {totalPages - 1}
        </span>
        <button
          className="btn btn-active btn-accent"
          onClick={setNextPage}
          disabled={!nextEnabled}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default Posts;
