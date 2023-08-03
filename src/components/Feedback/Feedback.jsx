import React from 'react';
import styles from './Feedback.module.css';

const Feedback = ({ feedbackCounts, setFeedbackCounts }) => {
  const handleResponse = responseType => {
    setFeedbackCounts(prevState => ({
      ...prevState,
      [responseType]: prevState[responseType] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedbackCounts;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((feedbackCounts.good / totalFeedback) * 100);
  };

  const options = Object.keys(feedbackCounts);
  const totalFeedback = countTotalFeedback();

  return (
    <div>
      <Section title="Feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleResponse} />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedbackCounts.good}
            neutral={feedbackCounts.neutral}
            bad={feedbackCounts.bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          className={styles['FeedbackBtn']}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className={styles['title']}>{title}</h2>
      {children}
    </div>
  );
};

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles['FeedbackItem']}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
