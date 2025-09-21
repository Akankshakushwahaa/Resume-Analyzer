// import React from "react";

// function Results({ data }) {
//   return (
//     <div className="mt-6 max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg">
//       <h2 className="text-xl font-semibold text-gray-800">Analysis Results</h2>
//       <p className="mt-2"><strong>Resume Rating:</strong> {data.rating}/10</p>
//       <p className="mt-2"><strong>Summary:</strong> {data.summary}</p>

//       <div className="mt-4">
//         <h3 className="font-semibold text-gray-700">Skills Found:</h3>
//         <ul className="list-disc ml-6">
//           {data.skills.map((s, i) => <li key={i}>{s}</li>)}
//         </ul>
//       </div>

//       <div className="mt-4">
//         <h3 className="font-semibold text-gray-700">Suggestions:</h3>
//         <ul className="list-disc ml-6 text-red-600">
//           {data.suggestions.map((s, i) => <li key={i}>{s}</li>)}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Results;



import React from "react";

function Results({ results }) {
  if (!results) return null;

  return (
    <div className="results-card">
      <h2>Analysis Results</h2>

      <div className="section">
        <h3>Skills Found:</h3>
        <ul>
          {results.skills && results.skills.length > 0 ? (
            results.skills.map((skill, idx) => <li key={idx}>{skill}</li>)
          ) : (
            <p>No relevant skills found.</p>
          )}
        </ul>
      </div>

      <div className="section">
        <h3>Resume Rating:</h3>
        <p className="rating">{results.rating}/10</p>
      </div>

      <div className="section">
        <h3>Suggestions:</h3>
        <p>{results.suggestions || "No suggestions provided."}</p>
      </div>

      <div className="section">
        <h3>Summary:</h3>
        <p className="summary">{results.summary}</p>
      </div>
    </div>
  );
}

export default Results;
