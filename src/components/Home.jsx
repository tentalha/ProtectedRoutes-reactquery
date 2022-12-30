import React from "react";
import Loading from "../assets/Loading.gif";
import { useAxios } from "../hooks/useAxios";

const Home = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const { data, isLoading, isError, error, refetch } = useAxios("posts", url, false);
  return (
    <div>
      <h1>this is home page</h1>
      <h2>Here are some trending posts from our users globally.</h2>
      {isLoading && <img src={Loading} />}
      {isError && <h4>{error.message}</h4>}
      <button onClick={refetch}>Fetch</button>
      <ul className="posts-list">
        {data?.data.map((post, index) => {
          return <li key={index}>{post?.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
