import React, { useState, useEffect } from "react";
import DisplayUserInfo from "../UniversalComponents/DisplayUserInfo";
import DisplayFeed from "./DisplayFeed";
import CreatePostForm from "./CreatePostForm";
import "./css/Feed.css";

import axios from "axios";

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  const fetchAllPosts = async url => {
    try {
      let res = await axios.get(url);
      const { posts } = res.data.body;
      setAllPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllPosts("/posts");
  }, []);

  return (
    <div className="Feed">
      <div className="displayUserContainer">
        <DisplayUserInfo />
      </div>
      <div className="displayFeed">
        <CreatePostForm fetchAllPosts={fetchAllPosts} />
        <DisplayFeed allPosts={allPosts} />
      </div>
    </div>
  );
};

export default Feed;
