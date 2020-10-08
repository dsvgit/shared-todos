import React, {  useState } from "react";
import { Input, Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function CreateTag({ onCreate, text, ...props }) {
  const [value, setValue] = useState("");
  const [editable, setEditable] = useState("");

  function handleConfirm() {
    if (value.trim() !== '') {
      onCreate(value);
    }

    setValue('');
    setEditable(false);
  }

  return editable ? (
    <Input
      autoFocus
      type="text"
      size="small"
      className="tag-input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleConfirm}
      onPressEnter={handleConfirm}
    />
  ) : (
    <Tag {...props} className="site-tag-plus" onClick={() => setEditable(true)}>
      <PlusOutlined /> {text}
    </Tag>
  );
}

export default CreateTag;
