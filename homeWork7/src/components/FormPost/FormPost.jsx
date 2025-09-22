import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";

export const FormPost = ({ addPost }) => {
  const [form] = Form.useForm();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Form
      layout="horizontal"
      form={form}
      initialValues={{ layout: "horizontal" }}
      style={{ maxWidth: "horizontal" === "inline" ? "none" : 600 }}
    >
      <Form.Item label="Заголовок">
        <Input
          placeholder="Введите заголовок"
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Содержание">
        <Input
          placeholder="ВВедите Содержание"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          onClick={() => {
            addPost(title, description);
          }}
        >
          Добавить
        </Button>
      </Form.Item>
    </Form>
  );
};
