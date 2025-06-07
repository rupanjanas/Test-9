import  { useState } from "react";

function AddUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { name, email };

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      await response.json();
      setSubmittedData(userData); 
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error submitting user:", error);
      alert("Error submitting user");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Form</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default AddUserForm;
