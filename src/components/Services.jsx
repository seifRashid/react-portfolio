export default function Services() {
  const services = [
    {
      id: 1,
      name: "Web Development",
      image:
        "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
      techStack: "React, Tailwind CSS, Node.js",
      description:
        "Building modern and responsive websites with the latest technologies.",
    },
    {
      id: 2,
      name: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFVJJTJGVVglMjBEZXNpZ258ZW58MHx8MHx8fDA%3D",
      techStack: "Figma, Adobe XD, CSS, Tailwind CSS",
      description:
        "Creating intuitive and user-friendly interfaces with a focus on design and usability.",
    },
    {
      id: 3,
      name: "Mobile App Development",
      image:
        "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TW9iaWxlJTIwQXBwJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
      techStack: "React Native, Flutter, Firebase",
      description:
        "Developing high-performance mobile applications for iOS and Android.",
    },
    //   {
    //     id: 4,
    //     name: "Backend Development",
    //     image: "https://via.placeholder.com/300",
    //     techStack: "Node.js, Express, MongoDB, MySQL",
    //     description: "Building secure and scalable backend services for web and mobile applications."
    //   }
  ];

  return (
    <section className="py-16 bg-gray-200">
      <div className="container sm:w-3/4 w-full  mx-auto px-6">
        <h2 className="text-4xl text-blue-600  font-bold text-center mb-10">My Services</h2>
        <div className="space-y-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full md:w-1/2 h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6 md:w-1/2">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Tech Stack:</strong> {service.techStack}
                </p>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
