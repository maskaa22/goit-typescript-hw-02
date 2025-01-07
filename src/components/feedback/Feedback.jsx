import React from "react";
import css from "./Feedback.module.css";

export default function Feedback({ count, totalFeedback, positiveFeedback }) {
  return (
    <div className={css.container}>
      <p className={css.statictic}>
        Good: <span className={css.normal}>{count.good}</span>
      </p>
      <p className={css.statictic}>
        Neutral: <span className={css.normal}>{count.neutral}</span>
      </p>
      <p className={css.statictic}>
        Bad: <span className={css.normal}>{count.bad}</span>
      </p>
      <p className={css.statictic}>
        Total: <span className={css.normal}>{totalFeedback}</span>
      </p>
      <p className={css.statictic}>
        Positive: <span className={css.normal}>{positiveFeedback}%</span>
      </p>
    </div>
  );
}
