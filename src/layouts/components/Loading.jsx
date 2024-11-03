import { useEffect, useState } from "react";
import LogoAnimation from "../LogoAnimation";
const Loading = () => {
  const [progress, setProgress] = useState(0);
  const styles = {
    progressBar: {
      width: "400px",
      height: "5px",
      backgroundColor: "#666666",
   
      overflow: "hidden",
      marginBottom: "10px",
    },
    progressFill: {
      height: "100%",
      backgroundColor: "#FDF7E4",
 
      transition: "width 0.3s ease",
    },
  };
  useEffect(() => {
    // Simulate progress increase over time
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval); // Stop when reaching 100%
          return 100;
        }
        return prev + 10; // Increase progress by 10% each time
      });
    }, 1000); // Adjust this value for speed

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-dark fixed top-0 left-0 z-[9999] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-[20px]">
          <div className="w-[150px]">
            <LogoAnimation className="w-[100%]" />
          </div>
          <div className="text-center">
            <h1 className="text-body-color font-Akira">{progress}%</h1>
          </div>
          <div style={styles.progressBar}>
              <div style={{ ...styles.progressFill, width: `${progress}%` }} />
            </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
