import axios from "axios";
import React, { useEffect, useState } from "react";
import "./post.css";
function Posts() {
  const [data, setData] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const fetchData = async () => {
    try {
      let data = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleSearch = (search) => {
    const filteredData = data.filter((item) => item.title === search);
    setData(filteredData);
  };
  return (
    <div>
      <h1>Posts</h1>
      <input
        className="searchInnput"
        placeholder="Seach Post"
        value={searchKey}
        onChange={(e) => {
          setSearchKey(e.target.value);
        }}
      />
      <button onClick={() => handleSearch(searchKey)}>Search</button>
      <div>
        <table>
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Posts;
