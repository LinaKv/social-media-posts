import React from "react";
import { useState } from "react";

function PostItem({ item }) {
  return (
    <>
      {item.map((el, index) => (
        <div className="card w-4/4 max-w-md bg-base-100 shadow-xl mt-6">
          <div className="card-body">
            <h2 className="card-title">{el.user.name}</h2>
            <p>{el.text}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default PostItem;
