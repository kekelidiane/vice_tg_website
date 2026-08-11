// Structure prête à l'emploi : remplacez le tableau ci-dessous par les
// vrais membres de l'équipe (nom, rôle, photo) quand vous les aurez.
const roles = [
  { role: "Coordination éducation", initials: "ÉD" },
  { role: "Coordination agriculture bio", initials: "AB" },
  { role: "Reboisement & environnement", initials: "RE" },
  { role: "Bénévolat & partenariats", initials: "BP" },
];

export default function Team() {
  return (
    <section id="team" className="bg-gray-50 py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Notre équipe
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Une équipe de bénévoles engagés, organisée autour de nos grands
          domaines d&apos;action.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {roles.map((member) => (
          <div
            key={member.role}
            className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
          >
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-100 text-green-700 font-bold text-xl flex items-center justify-center">
              {member.initials}
            </div>
            <p className="text-gray-700 font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
