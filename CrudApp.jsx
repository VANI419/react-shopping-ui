import React, { useState, useEffect } from "react";

const CrudApp = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [editPost, setEditPost] = useState({ id: "", title: "", body: "" });

  // Fetch data (READ)
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Create a new post (CREATE)
  const handleCreatePost = async (e) => {
    e.preventDefault();
    const newPostData = { title: newPost.title, body: newPost.body };
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPostData),
      });
      const data = await response.json();
      setPosts([...posts, data]); // Update the state with the new post
      setNewPost({ title: "", body: "" }); // Clear the form
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // Update an existing post (UPDATE)
  const handleEditPost = async (e) => {
    e.preventDefault();
    const updatedPostData = { title: editPost.title, body: editPost.body };
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${editPost.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPostData),
      });
      const data = await response.json();
      setPosts(posts.map((post) => (post.id === data.id ? data : post))); // Update the state with the edited post
      setEditPost({ id: "", title: "", body: "" }); // Clear the form
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  // Delete a post (DELETE)
  const handleDeletePost = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });
      setPosts(posts.filter((post) => post.id !== id)); // Remove the post from state
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div>
      <h1>CRUD App with Fetch</h1>

      {/* Create Post Form */}
      <form onSubmit={handleCreatePost}>
        <h2>Create Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Body"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />
        <button type="submit">Create Post</button>
      </form>

      {/* Edit Post Form */}
      <form onSubmit={handleEditPost}>
        <h2>Edit Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={editPost.title}
          onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
        />
        <textarea
          placeholder="Body"
          value={editPost.body}
          onChange={(e) => setEditPost({ ...editPost, body: e.target.value })}
        />
        <button type="submit">Update Post</button>
      </form>

      {/* Display Posts */}
      <h2>All Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
            <button
              onClick={() =>
                setEditPost({ id: post.id, title: post.title, body: post.body })
              }
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;
