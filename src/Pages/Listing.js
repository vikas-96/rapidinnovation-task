import React, { useEffect, useState } from "react";
import axios from "axios";

const Listing = () => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setListData(response.data))
      .catch((err) => console.log(err));
  }, []);

  // return !listData && <h1>Loading...</h1>;

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {listData.map((data) => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.userId}</td>
                <td>{data.title}</td>
                <td>{data.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Listing;
