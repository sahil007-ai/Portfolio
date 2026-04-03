import Image from "next/image";

const achievements = [
  {
    id: 1,
    title: "1st Place 🏆 - Mini Project Exhibition",
    event: "J D College Mini Project Exhibition (2025-2026)",
    description:
      "Secured 1st place for building 'TomatoGuide' (AI Based Cognitive Load Estimator) from scratch. The project uses OpenCV and MediaPipe for head pose estimation and eye aspect ratio (EAR) analysis to intelligently optimize workflow, fight procrastination, and adapt work durations based on focus patterns.",
    link: "https://lnkd.in/dqeGpN-x",
    image: "/Images/tomatoguide.jpg", // Updated to the actual image path
  },
  {
    id: 2,
    title: "1st Runner Up 🥈 - Designathon 2K26",
    event: "Designathon 2K26 @ JDCOEM",
    description:
      "Designed and coded a centralized frontend dashboard to gamify and simplify the job application process for freshers. Features included an XP leveling system, Kanban-style Application Board, and frictionless portfolio uploads.",
    image: "/Images/designathon.jpg.jpeg", // Updated to the actual image path
  },
  {
    id: 3,
    title: "2nd Position 🥈 - Blind Coding Challenge",
    event: "JDCOEM TECHFEST",
    description:
      "Wrote flawless algorithmic solutions with the monitor completely turned off. Relied entirely on core syntax knowledge, mental compilation, and muscle memory without any visual feedback or IDE assistance.",
    image: "/Images/blind-coding.jpg", // Updated to the actual image path
  },
  {
    id: 4,
    title: "2nd Place 🥈 - Emoji Coding Competition",
    event: "Emoji Coding Event",
    description:
      "Memorized a cheat sheet mapping programming commands to emojis in 5 minutes, and executed functional code based purely on emoji sequences. Successfully inferred logic for unseen emojis on the spot during the final round.",
    image: "/Images/emoji-coding.jpg", // Updated to the actual image path
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-brown-dark dark:text-peach">
        Awards & Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="flex flex-col border border-border rounded-xl p-6 bg-surface/40 hover:bg-surface transition-colors"
          >
            {/* IMAGE SECTION - Replace src with actual image path */}
            <div className="w-full h-48 bg-surface rounded-lg flex items-center justify-center mb-6 overflow-hidden relative border border-dashed border-border/60">
              {achievement.image ? (
                <Image 
                  src={achievement.image} 
                  alt={achievement.title} 
                  fill 
                  className="object-cover"
                />
              ) : (
                <span className="text-foreground/70 text-sm px-4 text-center">
                  [Image Section]<br />
                  Image not found
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
            <span className="text-sm text-accent mb-4 font-medium tracking-wide">
              {achievement.event}
            </span>
            <p className="text-foreground/80 leading-relaxed flex-grow">
              {achievement.description}
            </p>
            {achievement.link && (
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm underline underline-offset-4 text-accent hover:text-accent-hover transition-colors"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
