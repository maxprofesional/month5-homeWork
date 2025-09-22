import Card from "antd/es/card/Card";
import { URL } from "../../App";
import { Button } from "antd/es/radio";

export const Post = ({ post, deletePost }) => {
  return (
    <>
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title={`${post.id}. ${post.title}`}
      >
        {post.body}
      </Card>
      <Button onClick={() => deletePost(post.id)}>Удалить</Button>
    </>
  );
};
