// components/Motivation.js
import React from 'react';

const Motivation = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.mainHeading}>Hello Sadia Saleem</h1>
      <h2 style={styles.subtitle}>Student of Software Engineering</h2>
      <p style={styles.caption}>
        &quot;Success is not final, failure is not fatal: It is the courage to continue that counts.&quot;
      </p>
    </div>
  );
};

const styles = {
  container: {
    color: 'black',
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#FF8000',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  mainHeading: {
    fontSize: '5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    color: '#777',
    marginBottom: '20px',
  },
  caption: {
    fontSize: '2rem',
    fontStyle: 'italic',
    color: '#EEEEEE',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '10px',
  },
};

export default Motivation;
