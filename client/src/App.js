import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();

  // Fetch data when the component mounts
  useEffect(() => {
    fetch("/members")
      .then(response => response.json())
      .then(response => {
        if (response && response.members && response.members.length > 0) {
          setData(response.members);
        }
      });
  }, []);

  return (
    <div className="container">
      <h1>Members</h1>
      {data && Array.isArray(data) && data.length > 0 && data.map((member, index) => (
        <div key={`member_${index}`}>
          <p><strong>{member}</strong></p>
        </div>
      ))}
    </div>
  );
}

export default App;
