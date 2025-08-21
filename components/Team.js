import { getTeamData } from '../utils/global-data';

export default function Team() {
  const { founders } = getTeamData();

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center dark:text-white mb-12">
          Meet the Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="text-center">
              {/* Profile Image */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center overflow-hidden">
                {founder.image ? (
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-4xl font-bold text-gray-500 dark:text-gray-400">
                    {founder.name.charAt(0)}
                  </span>
                )}
              </div>
              
              {/* Name and Role */}
              <h3 className="text-xl font-semibold dark:text-white mb-1">
                {founder.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                {founder.role}
              </p>
              
              {/* LinkedIn Link */}
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.328v15.344C1 18.4 1.595 19 2.328 19h15.34c.734 0 1.332-.6 1.332-1.328V2.328C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
