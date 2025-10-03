
import React from "react";
import styles from "./BookingForm.module.css";

const BookingForm = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Book Your Trip</h2>
        <form>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text" required />
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className={styles.formGroup}>
            <label>Number of Guests</label>
            <input type="number" required />
          </div>
          <div className={styles.formGroup}>
            <label>Date</label>
            <input type="date" required />
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
