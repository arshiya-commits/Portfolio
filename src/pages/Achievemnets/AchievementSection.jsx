// import React from "react";
// import { Code2, Activity, Cpu, Layers, Network, Binary } from "lucide-react";

// const AchievementCard = ({
//   title,
//   company,
//   period,
//   description,
//   icon: Icon,
//   link,
// }) => (
//   <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
//     {/* Glass morphism effect */}
//     <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

//     {/* Animated gradient border */}
//     <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

//     <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
//       {/* Floating icon with pulse effect */}
//       <div className="relative mb-6">
//         <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
//         <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
//       </div>

//       <div className="space-y-3">
//         <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//           {title}
//         </h3>
//         <div className="flex justify-between items-center text-gray-300">
//           <span className="font-semibold text-blue-400">{company}</span>
//           <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
//             {period}
//           </span>
//         </div>
//         <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
//           {description}
//         </p>

//         {link && (
//           <a
//             href={link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block mt-4 text-sm text-blue-400 underline hover:text-blue-300"
//           >
//             View Details
//           </a>
//         )}
//       </div>
//     </div>
//   </div>
// );

// const AchievementsSection = () => {
//   const achievements = [
//     {
//       icon: Binary,
//       title: "Best Paper Certificate",
//       company: "RIDMSEF 2025, NIT Rourkela",
//       period: "March 2025",
//       description:
//         "Awarded Best Paper Certificate at the International Conference on Recent Innovations in Data, Machine Learning, and Smart Embedded Frameworks.",
//       link: "https://drive.google.com/your-best-paper-cert-link",
//     },
//     {
//       icon: Network,
//       title: "GDG Solution Challenge Finalist",
//       company: "Google Developers Group",
//       period: "2024",
//       description:
//         "Secured a place in the GDG Solution Challenge Finale representing innovative tech solutions using Google technologies.",
//       link: "https://drive.google.com/your-gdg-cert-link",
//     },
//     {
//       icon: Activity,
//       title: "IEEE YESIST Hackathon Finalist",
//       company: "Tunisia, North Africa",
//       period: "2024",
//       description:
//         "Finalist in the prestigious IEEE YESIST International Hackathon, showcasing socially impactful solutions.",
//       link: "https://drive.google.com/your-yesist-cert-link",
//     },
//     {
//       icon: Layers,
//       title: "WebForge Hackathon - 2nd Place",
//       company: "Advitiya 2K25, CSE-DS Dept",
//       period: "2025",
//       description:
//         "Secured 2nd spot in WebForge, a national-level web development hackathon organized by the Department of Data Science at RGMCET.",
//       link: "https://drive.google.com/your-webforge-cert-link",
//     },
//     {
//       icon: Cpu,
//       title: "Paper Presentation Champion",
//       company: "RGMCET",
//       period: "2025",
//       description:
//         "1st place in a paper presentation competition for presenting innovative work on AI and Smart Technologies.",
//       link: "https://drive.google.com/your-paper-presentation-cert-link",
//     },
//     {
//       icon: Code2,
//       title: "400+ DSA Problems Solved",
//       company: "LeetCode",
//       period: "Ongoing",
//       description:
//         "Solved over 400 problems on LeetCode with a focus on algorithms, data structures, and coding interviews.",
//       link: "https://leetcode.com/your-profile",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
//       <div className="absolute inset-0 bg-[#04081A]" />

//       <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

//       {/* Background Particles */}
//       <div className="absolute inset-0">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative container mx-auto px-6 mt-10">
//         <div className="flex flex-col items-center space-y-8 mb-20">
//           <div className="relative">
//             <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
//               Achievements
//             </h2>
//             <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
//           </div>
//           <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
//             Highlights from my academic, hackathon, and tech innovation journey 🚀
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
//           {achievements.map((ach, index) => (
//             <AchievementCard key={index} {...ach} />
//           ))}
//         </div>
//       </div>

//       {/* Background light blobs */}
//       <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
//       <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
//     </div>
//   );
// };

// export default AchievementsSection;
import React from "react";
import { Code2, Activity, Cpu, Layers, Network, Binary } from "lucide-react";

const AchievementCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
  link,
}) => (
  <div className="relative overflow-hidden transform transition-all duration-300 hover:-translate-y-1">
    <div className="bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800 shadow-md">
      <div className="mb-6">
        <Icon className="w-12 h-12 text-cyan-400" />
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-cyan-400">{title}</h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm text-blue-400 underline hover:text-blue-300"
          >
            View Details
          </a>
        )}
      </div>
    </div>
  </div>
);

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Binary,
      title: "Best Paper Certificate",
      company: "RIDMSEF 2025, NIT Rourkela",
      period: "March 2025",
      description:
        "Awarded Best Paper Certificate at the International Conference on Recent Innovations in Data, Machine Learning, and Smart Embedded Frameworks.",
      link: "https://www.linkedin.com/posts/abdul-hameed-syed_ridmsef2025-nitrourkela-deeplearning-activity-7327729174301802496-6U2t?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8A-vQBRSniL2_DNLvJWSXzd26TZb_CHZw",
    },
    {
      icon: Network,
      title: "GDG Solution Challenge - 2nd Place",
      company: "Google Developers Group",
      period: "2024",
      description:
        "Secured a place in the GDG Solution Challenge Finale representing innovative tech solutions using Google technologies.",
      link: "https://www.linkedin.com/checkpoint/challengesV2/AQEIE39FnnwbygAAAZenWL1X5pdLKkLX-Lf-3SUuPErA8hVVQGj9oSdOlMuqyGhFrku3gaWfmGbprjopIxGSI2i1tcEfJpg6Rw?ut=0lJdasvH8YhbQ1",
    },
    {
      icon: Activity,
      title: "IEEE YESIST Hackathon Finalist",
      company: "Tunisia, North Africa",
      period: "2024",
      description:
        "Finalist in the prestigious IEEE YESIST International Hackathon, showcasing socially impactful solutions.",
      link: "https://www.linkedin.com/posts/abdul-hameed-syed_innovation-ieeeyesist12-finalist-activity-7267770487080927232-WIOC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8A-vQBRSniL2_DNLvJWSXzd26TZb_CHZw",
    },
    {
      icon: Layers,
      title: "WebForge Hackathon - 2nd Place",
      company: "Advitiya 2K25, CSE-DS Dept",
      period: "2025",
      description:
        "Secured 2nd spot in WebForge, a national-level web development hackathon organized by the Department of Data Science at RGMCET.",
      link: "https://www.linkedin.com/posts/abdul-hameed-syed_webdevelopment-hackathon-webforge-activity-7328789104572162048-U-fy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8A-vQBRSniL2_DNLvJWSXzd26TZb_CHZw",
    },
    {
      icon: Cpu,
      title: "Paper Presentation Champion",
      company: "RGMCET",
      period: "2025",
      description:
        "1st place in a paper presentation competition for presenting innovative work on BloodGroup Detection Using CNN.",
      link:"https://drive.google.com/your-paper-presentation-cert-link",
    },
    {
      icon: Code2,
      title: "400+ DSA Problems Solved",
      company: "LeetCode",
      period: "Ongoing",
      description:
        "Solved over 400 problems on LeetCode with a focus on algorithms, data structures, and coding interviews.",
      link: "https://leetcode.com/u/arshi_22/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#04081A] pt-32 pb-20 px-6">
      <div className="flex flex-col items-center space-y-8 mb-20">
        <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
          Achievements
        </h2>
        <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
          Highlights from my academic, hackathon, and tech innovation journey 🚀
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {achievements.map((ach, index) => (
          <AchievementCard key={index} {...ach} />
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
