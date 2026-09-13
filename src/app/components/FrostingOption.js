export default function FrostingOption({ frostings, setCake }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-md">
      <h2 className="mb-5 text-xl font-bold text-gray-800">
        Choose Frosting
      </h2>

      <div className="grid grid-cols-2 gap-4 text-purple-100">
        {frostings.map((frosting) => (
          <button
            key={frosting.name}
            onClick={() => setCake(frosting.image)}
            className="text-purple-700 rounded-xl border-2 border-gray-200 p-4 transition hover:border-purple-500 hover:bg-purple-50"
          >
            {frosting.name}
          </button>
        ))}
      </div>
    </div>
  );
}