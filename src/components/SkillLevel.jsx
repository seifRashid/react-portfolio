export default function SkillLevel() {
  const skills = [
    { name: "JavaScript", level: "90%" },
    { name: "React", level: "85%" },
    { name: "Tailwind CSS", level: "80%" },
    { name: "Node.js", level: "75%" },
    { name: "Figma", level: "70%" },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
        <div className="space-y-6 max-w-lg mx-auto">
          {skills.map((skill, index) => (
            <div key={index}>
              <p className="text-lg font-semibold">{skill.name}</p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-600 h-4 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
