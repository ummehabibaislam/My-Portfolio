
'use client';
import { useState } from 'react';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('Skills');

  const sections = ['Skills', 'Experience', 'Education','Training'];

  const renderContent = () => {
    if (activeTab === 'Skills') {
      const skills = [
        { name: 'Node.js', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 87 },
        { name: 'Javascripts', level: 93 },
        { name: 'Typescripts', level: 93 },
        { name: 'HTML', level: 95 },
        { name: 'css', level: 95 },
      ];

      return (
        <div className="sm:col-span-1 grid md:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-[#252f5b] p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-sm text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === 'Experience') {
      return (
        <section className="w-full text-white space-y-6">
        <div className="max-w-6xl mx-auto">
          {/*<h2 className="text-3xl font-bold mb-8">Experience</h2>*/}
          <div className="space-y-6">
        
              <div className="border border-gray-700 p-5 rounded-md bg-[#252f5b] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Left - Date */}
                <div className=" col-span-1 text-sm text-gray-400 font-bold pt-1">June 2017 - Oct 2017</div>
  
                {/* Middle - Title + Company */}
                <div className=' col-span-1 '>
                  <h3 className="text-lg font-semibold">Junior Software Engineer</h3>
                  <p className="text-sm text-gray-400">Astute Horse</p>
                </div>
  
                {/* Right - Description */}
                <div className="col-span-2 text-sm text-gray-300 space-y-2">
                <h3 className="text-lg font-semibold mb-1 text-white">Role & Responsibilities</h3>
                <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>Developed and maintained backend code using PHP and MySQL to support web-based applications.</li>
                    <li>Participated in writing clean, efficient, and reusable code to enhance system functionality.</li>
                    <li>Performed troubleshooting and debugging to resolve software issues and ensure smooth application performance.</li>
                    <li>Collaborated with the development team to support ongoing feature enhancements and codebase maintenance.</li>
                </ul>
                </div>
              </div>
          </div>
        </div>
         {/* second experience */}

         <div className="max-w-6xl mx-auto">
          {/*<h2 className="text-3xl font-bold mb-8">Experience</h2>*/}
          <div className="space-y-6 pt-2">
        
              <div className="border border-gray-700 p-5 rounded-md bg-[#252f5b] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Left - Date */}
                <div className=" col-span-1 text-sm text-gray-400 font-bold">Feb 2018 - Aug 2019</div>
  
                {/* Middle - Title + Company */}
                <div className=' col-span-1 '>
                  <h3 className="text-lg font-semibold">Lecturer</h3>
                  <p className="text-sm text-gray-400">Institute of Science Trade & Technology (ISTT)</p>
                </div>
  
                {/* Right - Description */}
                <div className="col-span-2 text-sm text-gray-300 space-y-2">
                <h3 className="text-lg font-semibold mb-1 text-white">Role & Responsibilities</h3>
                <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>Conducting Lectures and Labs</li>
                    <li>Supervision of Students</li>
                    <li> Administrative Support</li>
                    <li>Organizing Co-curricular Activities</li>
                </ul>
                </div>
              </div>
          </div>
        </div>

   
      </section>
      );
    }

    if (activeTab === 'Education') {
      return (
        <div className="text-gray-300 space-y-4 bg-[#252f5b] p-4 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-white">Bachelor of Science in Computer Science and Engineering</h3>
          <p className="text-xl">Gopalganj Science and Technology University, Bangladesh, <span className='font-bold text-sm'>2013 - 2016</span></p>
        </div>
      );
    }

    if (activeTab === 'Training') {
      return (
          <section className="space-y-6">
            <div className="text-gray-300 bg-[#252f5b] p-4 rounded-lg shadow-md space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Full Stack Web Development (React), Lexicon, <span className="font-bold text-xl">(On-going)</span>
              </h3>
              <p className="text-sm">
                Comprehensive training covering the development of both frontend and backend web applications using modern technologies such
                as React, Node.js, PostgreSQL, and more. The training emphasizes building scalable, performant, and user-centric solutions
                across the entire web stack.
              </p>
            </div>

            <div className="text-gray-300 bg-[#252f5b] p-4 rounded-lg shadow-md space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Java Programming, Ministry of Information and Communication Technology (MoICT), Bangladesh, <span className="font-bold text-xl">2017</span>
              </h3>
              <p className="text-sm">
                In-depth training on object-oriented programming using Java. Covered core concepts including classes, inheritance, polymorphism, exception handling, and basic data structures.
              </p>
            </div>

            <div className="text-gray-300 bg-[#252f5b] p-4 rounded-lg shadow-md space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Android App Development, Ministry of Information and Communication Technology (MoICT), Bangladesh, <span className="font-bold text-xl">2014</span>
              </h3>
              <p className="text-sm">
                Practical training focused on developing mobile applications for Android using Java. Learned activity lifecycle management, UI design, data persistence, and basic API integration.
              </p>
            </div>
          </section>

      );
    }

    return null;
  };

  return (
    <section className="w-full bg-[#040d5c] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Side*/}
        <div className="grid sm:grid-cols-1 md:grid-col gap-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setActiveTab(section)}
              className={`py-2 px-4 rounded-full text-xl font-medium transition-all duration-200 ${
                activeTab === section
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#252f5b] text-gray-300 hover:bg-gray-700'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Right Side  */}
        <div className="md:col-span-3">{renderContent()}</div>
      </div>
    </section>
  );
}
