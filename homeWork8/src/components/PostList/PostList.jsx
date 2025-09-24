import Card from "antd/es/card/Card";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { URL } from "../../App";
import { Post } from "../Post/Post";
import { FormPost } from "../FormPost/FormPost.jsx";
import { genTreeStyle } from "antd/es/tree/style/index.js";

const POST_URL = "https://dummyjson.com/posts/add";
export const PostList = () => {
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const [posts, setPosts] = useState([]);

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((item) => item.id !== id));
  };

  const getPosts = async () => {
    try {
      const response = await axios.get(URL);
      setPosts(response.data.posts);
      console.log(response.data.posts);
    } catch (e) {
      console.error(e);
    }
  };
  const addPost = async (title, body) => {
    if (title === "" || body === "") {
      titleRef.current.style.border = "1px solid red";
      bodyRef.current.style.border = "1px solid red";
    }
    console.log(title, body);
    try {
      const response = await axios.post(
        POST_URL,
        {
          title: title,
          body: body,
          userId: 5,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);

      setPosts((prev) => [...prev, { title, body, id: posts.length + 1 }]);

      console.log("Пост успешно добавлен");
    } catch (error) {
      console.error("Ошибка при добавлении поста:", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <FormPost addPost={addPost} bodyRef={bodyRef} titleRef={titleRef} />
      <Card title="Posts">
        {posts.map((item) => (
          <Post key={item.id} post={item} deletePost={deletePost} />
        ))}
      </Card>
    </>
  );
};
