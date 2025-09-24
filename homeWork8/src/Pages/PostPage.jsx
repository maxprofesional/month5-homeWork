import { Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = "https://dummyjson.com/post/";

export const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const getPost = async () => {
    try {
      const response = await axios.get(`${URL}${id}`);
      setPost(response.data);
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getPost();
  }, [id]);
  console.log(post);
  if (!post) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: 100 }}
      >
        <Spin size="large" tip="Загрузка поста..." />
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 800, margin: "50px auto" }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => navigate(-1)}>BACK</button>
    </div>
  );
};
