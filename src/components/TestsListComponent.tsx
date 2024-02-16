import React, { useEffect, useState } from 'react';
import TestService from '';

const TestListComponent = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const data = await TestService.getAllTests();
        setTests(data);
      } catch (error) {
        // Handle error
      }
    };

    fetchTests();
  }, []);

  return (
    <div>
      <h1>All Tests</h1>
      <ul>
        {tests.map(test => (
          <li key={test.id}>{test.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestListComponent;
