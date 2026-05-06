import React from 'react';
import styles from '../../styles/sections/schedules.module.css';

const ScheduleItem = ({ description, date, isActive }) => {
  return (
    <div className={`flex flex-col flex-1 min-w-50 ${styles.scheduleItem}`}>
      {/* Description text */}
      <p className={styles.description}>
        {description}
      </p>

      {/* The Bar */}
      <div className={`${styles.bar} ${isActive ? styles.activeBar : ''}`}></div>

      {/* Date text */}
      <p className={styles.date}>
        {date}
      </p>
    </div>
  );
};

export default ScheduleItem;