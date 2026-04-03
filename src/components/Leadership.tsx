import Image from "next/image";

const leadershipRoles = [
  {
    id: 1,
    title: "Workshop Host: Resume Engineering & ATS Navigation",
    event: "Peer Mentorship Session",
    description:
      "Treated resume creation as an optimization problem. Guided peers on ATS parsers, LaTeX/Markdown-style layouts, contextual impact statements, and technical stack alignment to maximize visibility in tech recruiting.",
    link: "#", // Replace with the actual link if you have one
    imagePlaceholder: "Paste your image path here (e.g., /Images/resume-workshop.jpg)",
    image: "/Images/resume-workshop.jpg",
  },
  {
    id: 2,
    title: "Professional Anchor - Flagship Annual Event",
    event: "College Annual Festival",
    description:
      "Hosted the college's biggest stage of the year. Developed strong public speaking skills by engaging a massive, diverse audience, managing live transitions, and adapting on the fly while coordinating closely with tech crews.",
    imagePlaceholder: "Paste your image path here (e.g., /Images/anchoring.jpg)",
    image: "/Images/anchoring.jpg",
  },
  {
    id: 3,
    title: "Community Outreach - Digital Literacy Initiative",
    event: "Avinya Forum School Visit",
    description:
      "Visited a local school to bridge the digital divide. Introduced young students to computers and digital literacy. Combined technology education with hands-on craft activities and magic tricks to spark curiosity.",
    imagePlaceholder: "Paste your image path here (e.g., /Images/school-visit.jpg)",
    image: "/Images/school-visit.jpg",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-brown-dark dark:text-peach">
        Leadership & Community Engagement
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {leadershipRoles.map((role) => (
          <div
            key={role.id}
            className="flex flex-col border border-border rounded-xl p-6 bg-surface/40 hover:bg-surface transition-colors"
          >
            {/* IMAGE SECTION */}
            <div className="w-full h-48 bg-surface rounded-lg flex items-center justify-center mb-6 overflow-hidden relative border border-dashed border-border/60">
              {role.image ? (
                <Image 
                  src={role.image} 
                  alt={role.title} 
                  fill 
                  className="object-cover"
                />
              ) : (
                <span className="text-foreground/70 text-sm px-4 text-center">
                  [Image Section]<br />
                  {role.imagePlaceholder}
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold mb-2">{role.title}</h3>
            <span className="text-sm text-accent mb-4 font-medium tracking-wide">
              {role.event}
            </span>
            <p className="text-foreground/80 leading-relaxed flex-grow text-sm">
              {role.description}
            </p>
            {role.link && role.link !== "#" && (
              <a
                href={role.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm underline underline-offset-4 text-accent hover:text-accent-hover transition-colors"
              >
                View Details
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
