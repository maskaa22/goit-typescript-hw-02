import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";
import Notification from "./components/notification/Notification";

function App() {
  const [statictic, setStatictic] = useState(() => {
    const savedObject = window.localStorage.getItem("statictic");

    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "good") {
      setStatictic({
        ...statictic,
        good: statictic.good + 1,
      });
    } else if (feedbackType === "neutral") {
      setStatictic({
        ...statictic,
        neutral: statictic.neutral + 1,
      });
    } else if (feedbackType === "bad") {
      setStatictic({
        ...statictic,
        bad: statictic.bad + 1,
      });
    } else
      setStatictic({
        good: 0,
        neutral: 0,
        bad: 0,
      });
  };

  const totalFeedback = statictic.good + statictic.neutral + statictic.bad;
  const positiveFeedback = Math.round((statictic.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("statictic", JSON.stringify(statictic));
  }, [statictic]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          count={statictic}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
