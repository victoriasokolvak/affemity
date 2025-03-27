import { useState, useEffect } from "react";
import { LinearProgress } from "@mui/material";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = Math.min(oldProgress + 1, 23);
        if (newProgress === 23) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <LinearProgress
      variant="determinate"
      value={progress}
      sx={{
        width: "100%",
        borderRadius: 10,
        height: "0.5rem",
        backgroundColor: "#E8E6EF",
        "& .MuiLinearProgress-bar": {
          borderRadius: 10,
          backgroundColor: "#31728D",
        },
      }}
    />
  );
};
