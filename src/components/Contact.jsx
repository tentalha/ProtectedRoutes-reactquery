import React from "react";
import { useAxios } from "../hooks/useAxios";

const Contact = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const { data, isLoading } = useAxios("comments", url, { isEnabled: true });

  return (
    <div>
      <h1>this is contact page</h1>
      {isLoading && <h3>Loading...</h3>}
      {data?.data.map((item) => (
        <span>{item.id}</span>
      ))}
    </div>
  );
};

export default Contact;
