import React from "react";
import { useState } from "react";
import { formattedDate } from "../utils/helper";

function PostItem({ item }) {
  return (
    <>
      {item.map((el, index) => (
        <div className="card w-4/4 max-w-md bg-base-100 shadow-xl mt-6">
          <div className="card-body">
            <h2 className="card-title">{el.user.name}</h2>
            <p>{el.text}</p>
            <p class="text-gray-600/50 text-sm">
              {formattedDate(el.created_at)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default PostItem;
