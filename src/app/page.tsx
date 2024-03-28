'use client';
import React, { useState } from 'react';
import styles from './page.module.css';

const Home: React.FC = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = () => {
    const P = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    const monthlyPayment = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMonthlyPayment(monthlyPayment);
  };

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <h1>Mortgage Calculator</h1>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor="principal">
            Principal:
          </label>
          <input
            className={styles.inputField}
            type="number"
            id="principal"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor="interestRate">
            Interest Rate (%):
          </label>
          <input
            className={styles.inputField}
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor="loanTerm">
            Loan Term (years):
          </label>
          <input
            className={styles.inputField}
            type="number"
            id="loanTerm"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </div>
        <button className={styles.calculateButton} onClick={calculateMonthlyPayment}>
          Calculate
        </button>
        <p className={styles.monthlyPaymentText}>
          Monthly Payment: ${monthlyPayment.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Home;