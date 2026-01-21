import InteractionRow from "./InteractionRow";
import Dropdown from "./Dropdown";
import DateFilter from "./DateFilter";

export default function InteractionTable({
  data,
  dateSort,
  setDateSort,
  progress,
  setProgress,
  bookingType,
  setBookingType,
  bookingInfo,
  setBookingInfo,
}) {
  return (
    <div className="hidden lg:block bg-white rounded-2xl shadow-xl overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-6 py-4 text-left">Interaction ID</th>
            <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4 text-left">Email</th>
            <th className="px-6 py-4 text-left">Contact</th>

            {/* DATE CHECKER */}
            <th className="px-6 py-4 text-left relative">
              <details className="relative">
                <summary className="cursor-pointer select-none">
                  Date
                </summary>

                <div className="absolute z-20 mt-2">
                  <DateFilter
                    value={dateSort}
                    onChange={setDateSort}
                  />
                </div>
              </details>
            </th>

            <th className="px-6 py-4 text-left">Assigned By</th>

            <th className="px-6 py-4 text-left">
              <Dropdown
                value={progress}
                onChange={setProgress}
                options={[
                  { label: "All", value: "All" },
                  { label: "Confirmed", value: "Confirmed" },
                  { label: "Need Staff", value: "Need Staff" },
                  {
                    label: "Need Human Attention",
                    value: "Need Human Attention",
                  },
                ]}
              />
            </th>

            <th className="px-6 py-4 text-left">
              <Dropdown
                value={bookingType}
                onChange={setBookingType}
                options={[
                  { label: "All", value: "All" },
                  { label: "New", value: "New" },
                  { label: "Existing", value: "Existing" },
                  { label: "Urgent", value: "Urgent" },
                ]}
              />
            </th>

            <th className="px-6 py-4 text-left">
              <Dropdown
                value={bookingInfo}
                onChange={setBookingInfo}
                options={[
                  { label: "All", value: "All" },
                  { label: "Confirmed", value: "Confirmed" },
                  { label: "Decline", value: "Decline" },
                ]}
              />
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <InteractionRow key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
