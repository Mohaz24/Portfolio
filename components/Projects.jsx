import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MealzImg from '../public/assets/projects/Mealz.png';
import quizImg from '../public/assets/projects/quiz.png'
import passwordImg from '../public/assets/projects/password-generator.png';
import TaskImg from '../public/assets/projects/task.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8' >
          <ProjectItem
            title='Mealz Food Delivery'
            backgroundImg={MealzImg}
            projectUrl='/mealz'
            tech='React JS'
          />
          <ProjectItem
            title='Quizzical App'
            backgroundImg={quizImg}
            projectUrl='/quizzical'
            tech='React JS'

          />
          <ProjectItem
            title='Password-generator'
            backgroundImg={passwordImg}
            projectUrl='/passwordGen'
            tech='JS'

          />
          <ProjectItem
            title='Task manager'
            backgroundImg={TaskImg}
            projectUrl='/tasks'
            tech='JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
