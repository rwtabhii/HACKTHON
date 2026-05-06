import React from 'react';
import ScheduleItem from '../common/schedulesItem';

const scheduleData = [
  { id: 1, description: "Registrations and Idea \n Submission Open", date: "Thu, Jul 04, 2025", isActive: false },
  { id: 2, description: "Introductory and Problem \n Statement Explainer Session", date: "Thu, Jul 08, 2025", isActive: false },
  { id: 3, description: "Mentor-Mentee \n Connects - Begins", date: "Thu, Jul 08, 2025", isActive: false },
  { id: 4, description: "Mentor-Mentee \n Connects - Ends", date: "Tue, Jul 16, 2025", isActive: false }
];

const Schedules = () => {
  return (
    <section aria-labelledby='schedules' className="bg-black py-5 px-15 w-full">
      <div className=" mx-auto">
        <h2 className="text-center text-[#7b61ff] tracking-[0.4em] uppercase mb-20 text-xl font-bold">
          Hackathon Schedule
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6">
          {scheduleData.map((item) => (
            <ScheduleItem 
              key={item.id}
              description={item.description}
              date={item.date}
              isActive={item.isActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedules;