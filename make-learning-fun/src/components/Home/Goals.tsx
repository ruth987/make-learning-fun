import React from 'react';
import GoalCard from './GoalCard';
import img1 from '../../assets/study.svg';
import img2 from '../../assets/collaboration.svg';
import img3 from '../../assets/personalize.svg';
import img4 from '../../assets/celebrate.svg';

const Goals: React.FC = () => {
  return (
    <>
    <h2 className="text-4xl font-bold text-center mt-8 text-purple-900 py-10">Our Goals</h2>
    <div className="flex justify-center space-x-4">
      <GoalCard image={img1} goal="Make Learning Interactive" />
      <GoalCard image={img2} goal="Empower Collaborative Learning" />
      <GoalCard image={img3} goal="Personalize Your Learning Journey" />
      <GoalCard image={img4} goal="Track Progress and Achievements" />
    </div>
    </>
  );
};

export default Goals;
