import React, { useState } from "react";
import CommentItem from "./CommentItem";
import Comment from "../types/Comment";

type Props = {
  styled: boolean;
};

const BasicCommentList: React.FC<Props> = ({ styled }: Props) => {
  const [comments, setComments] = useState([
    {
      body:
        "Any fool can write code that a computer can understand.\n" +
        "Good programmers write code that humans can understand.\n" +
        " ~ Martin Fowler",
      author: "Benedict",
      timestamp: new Date(2022, 10, 28, 10, 33, 30),
    },
    {
      body:
        "Code reuse is the Holy Grail of Software Engineering.\n" +
        " ~ Douglas Crockford",
      author: "Casey",
      timestamp: new Date(2022, 11, 1, 11, 11, 11),
    },
    {
      body: "Nine people can't make a baby in a month.\n" + " ~ Fred Brooks",
      author: "Duuet",
      timestamp: new Date(2022, 11, 2, 10, 30, 0),
    },
  ]);

  const [text, setText] = useState("");

  const handleEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const addNew = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form submission refresh
    const now = new Date();
    const bod = text;
    const auth = "Anonymous";
    setText("");
    setComments([...comments, { body: bod, author: auth, timestamp: now }]);
  };

  return (
    <>
      <ul>
        {comments.map((comment) => (
          <CommentItem
            comment={comment}
            styled={styled}
            key={comment.timestamp.toString()}
          />
        ))}
      </ul>
      <form onSubmit={addNew}>
        <h3>Write your own comment here</h3>
        <input
          className="form-control"
          onChange={handleEvent}
          type="text"
          id="textbox"
          value={text}
        />

        <button type="submit" className="btn btn-secondary">
          Add Comment
        </button>
      </form>
    </>
  );
};

export default BasicCommentList;
