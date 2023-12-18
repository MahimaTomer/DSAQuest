import React from 'react';
import DsaCard from './DsaCard';
import "./DSATracker.css"

const DsaTracker = () => {
    const dsaData = [
        {
          title: "Arrays and Lists",
          description: "Learn about arrays and linked lists",
          progress: 50,
        },
        {
          title: "String Programming",
          description: "Learn about Strings",
          progress: 50,
        },
        
        {
          title: "Stacks and Queues",
          description: "Study stack and queue Data Structures",
          progress: 75,
        },
        {
          title: "Linked List",
          description: "Study Linked-List Data Structures",
          progress: 30,
        },
        {
          title: "Trees",
          description: "Study trees algorithms",
          progress: 30,
        },
        {
          title: "Graphs",
          description: "Study Graphs algorithms",
          progress: 30,
        },
        {
          title: "Binary Search",
          description: "Understand Binary Search algorithms",
          progress: 45,
        },
        {
          title: "Greedy Algorithm",
          description: "Learn greedy algorithm strategies",
          progress: 55,
        },
      
        {
          title: "Recursion",
          description: "Understand recursive programming algorithms",
          progress: 70,
        },
        {
          title: "Bit Manipulation",
          description: "Explore bitwise operations and manipulation",
          progress: 45,
        },
        {
          title: "Dynamic Programming",
          description: "Master dynamic programming techniques",
          progress: 40,
        },
       

      ];

  return (
    <div className="dsa-tracker">
      {dsaData.map((dsaItem, index) => (
        <DsaCard
          key={index}
          title={dsaItem.title}
          description={dsaItem.description}
          progress={dsaItem.progress}
        />
      ))}
    </div>
  );
};

export default DsaTracker;
