export default function InteractionTable({
  data,
  onView,
  category,
  onCategoryChange,
}) {
  return (
    <table className="w-full text-md">
      <thead className="bg-gray-50 text-gray-600 border-b">
        <tr>
          {/* CATEGORY WITH DROPDOWN */}
          <th className="p-6 text-left">
            <div className="flex items-center gap-2">
              <span>Category</span>

              <select
                value={category}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="text-xs px-2 py-1 rounded-md outline-none cursor-pointer border"
              >
                <option value="all">All</option>
                <option value="Phone">Phone</option>
                <option value="Mail">Mail</option>
              </select>
            </div>
          </th>

          <th className="p-6 text-left">ID</th>
          <th className="p-6 text-left">Type</th>
          <th className="p-6 text-right">Details</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.id}
            className={`
              hover:bg-gray-50 transition
              border-b
              ${index === data.length - 1 ? "border-b-0" : ""}
            `}
          >
            <td className="p-6">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold text-white
                  ${
                    item.category === "Phone"
                      ? "bg-[#8BC43D]"
                      : "bg-red-500"
                  }`}
              >
                {item.category}
              </span>
            </td>

            <td className="p-6">{item.ref}</td>
            <td className="p-6">{item.type}</td>

            <td className="px-6 text-right">
              <button
                onClick={() => onView(item)}
                className="
                  px-4 py-2 rounded-full
                  bg-[#8BC43D]
                  text-white text-xs font-semibold
                  hover:opacity-90 cursor-pointer
                "
              >
                View
              </button>
            </td>
          </tr>
        ))}

        {data.length === 0 && (
          <tr>
            <td colSpan="4" className="p-10 text-center text-gray-400">
              No interactions found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
