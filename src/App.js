import React from "react";

export default function App() {
  // it return a jsx
  // jsx allows ius to write the html in the react
  const title = "blog Post";
  const body = "this is my blog post";

  const comments = [
    { id: 1, text: "Home" },
    { id: 2, text: "contact" },
    { id: 3, text: "about us" },
  ];

  const loading = false;
  const showComments = true;
  const commentBlock=(
        <div className="comments">
          <h1>{comments.length}</h1>
          <ul>
            {comments.map((item) => {
              return <li key={item.text + item.id}>{item.text}</li>;
            })}
          </ul>
        </div>
      )

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <h1>{showComments && title}</h1>
      <p>{body}</p>
      {showComments ? commentBlock : (
        "no"
      )}
    </div>
  );
}
