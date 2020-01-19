import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../component/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam("id");
  const blogPost = state.find(post => post.id === id);
  const { editBlogPost } = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        editBlogPost(id,title, content, () => navigation.pop());
      }}
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
