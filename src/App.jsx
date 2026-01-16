import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="clock-container">
      <h1>Digital Clock</h1>
      <p>
        {format(currentTime, "EEEE, MMMM do yyyy - HH:mm:ss")}
      </p>
    </div>
  );
}

export default App;
