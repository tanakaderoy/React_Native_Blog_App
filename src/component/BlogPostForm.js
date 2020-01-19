import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = props => {
  console.log(props);
  const { onSubmit, initialValues } = props;
  const initTitle = initialValues.title != null ? initialValues.title : "";
  const initContent =
    initialValues.content != null ? initialValues.content : "";
  const [title, setTitle] = useState(initTitle);
  const [content, setContent] = useState(initContent);

  return (
    <View>
      <Text style={styles.label}> Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={text => {
          setTitle(text);
        }}
        style={styles.textInput}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        value={content}
        onChangeText={text => {
          setContent(text);
        }}
        style={styles.textInput}
      />
      <Button
        onPress={() => {
          onSubmit(title, content);
        }}
        title="Save Blog Post"
      />
    </View>
  );
};
BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: ""
  }
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default BlogPostForm;
