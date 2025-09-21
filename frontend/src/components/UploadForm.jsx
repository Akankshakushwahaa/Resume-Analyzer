import React, { useState } from "react";

function UploadForm({ setResults }) {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please upload a resume!");

    const formData = new FormData();
    formData.append("resume", file);

    const res = await fetch("http://127.0.0.1:5000/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResults(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto"
    >
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="block w-full mb-4"
      />
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
      >
        Analyze Resume
      </button>
    </form>
  );
}

export default UploadForm;
