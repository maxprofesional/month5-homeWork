import Card from "antd/es/card/Card";
import { URL } from "../../App";
import { Button } from "antd/es/radio";
import { useNavigate } from "react-router-dom";

export const Post = ({ post, deletePost }) => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title={`${post.id}. ${post.title}`}
        onClick={() => {
          navigate(`/post/${post?.id}`);
        }}
      >
        {post.body}
      </Card>
      <Button onClick={() => deletePost(post.id)}>Удалить</Button>
    </>
  );
};
