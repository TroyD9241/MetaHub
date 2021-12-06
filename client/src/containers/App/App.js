
import React from "react";
function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <p class="text-red-600 text-xl">{!data ? "Loading..." : data}</p>
        </header>
      </div>
    </>
  );
}

export default App;
