import React, { useState } from 'react';
import Feedback from './Feedback/Feedback';

export const App = () => {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Feedback
        feedbackCounts={feedbackCounts}
        setFeedbackCounts={setFeedbackCounts}
      />
    </div>
  );
};

export default App;
