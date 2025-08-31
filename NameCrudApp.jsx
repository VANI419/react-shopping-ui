import React, { useState, useEffect } from "react";

const NameCrudApp = () => {
  const [names, setNames] = useState([]); // Store the list of names
  const [newName, setNewName] = useState(""); // New name to create
  const [editName, setEditName] = useState({ id: "", name: "" }); // For editing name

  // Step 1: Fetch all names (Read operation)
  useEffect(() => {
    fetchNames();
  }, []);

  const fetchNames = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setNames(data); // We're using users here as an example of names
    } catch (error) {
      console.error("Error fetching names:", error);
    }
  };

  // Step 2: Create a new name (Create operation)
  const handleCreateName = async (e) => {
    e.preventDefault();
    const newNameData = { name: newName };

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNameData),
      });
      const data = await response.json();
      setNames([...names, data]); // Add the new name to the list
      setNewName(""); // Clear input field
    } catch (error) {
      console.error("Error creating name:", error);
    }
  };

  // Step 3: Edit an existing name (Update operation)
  const handleEditName = async (e) => {
    e.preventDefault();
    const updatedNameData = { name: editName.name };

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${editName.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedNameData),
        }
      );
      const data = await response.json();
      setNames(names.map((name) => (name.id === data.id ? data : name))); // Update name
      setEditName({ id: "", name: "" }); // Clear edit form
    } catch (error) {
      console.error("Error updating name:", error);
    }
  };

  // Step 4: Delete a name (Delete operation)
  const handleDeleteName = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
      });
      setNames(names.filter((name) => name.id !== id)); // Remove name from list
    } catch (error) {
      console.error("Error deleting name:", error);
    }
  };

  return (
    <div>
      <h1>Name CRUD Operations with Fetch</h1>

      {/* Create Name Form */}
      <form onSubmit={handleCreateName}>
        <h2>Create Name</h2>
        <input
          type="text"
          placeholder="Enter name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button type="submit">Create Name</button>
      </form>

      {/* Edit Name Form */}
      {editName.id && (
        <form onSubmit={handleEditName}>
          <h2>Edit Name</h2>
          <input
            type="text"
            placeholder="Enter new name"
            value={editName.name}
            onChange={(e) => setEditName({ ...editName, name: e.target.value })}
          />
          <button type="submit">Update Name</button>
        </form>
      )}

      {/* Display the list of names */}
      <h2>List of Names</h2>
      <ul>
        {names.map((name) => (
          <li key={name.id}>
            <p>{name.name}</p>
            <button onClick={() => handleDeleteName(name.id)}>Delete</button>
            <button onClick={() => setEditName({ id: name.id, name: name.name })}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NameCrudApp;
