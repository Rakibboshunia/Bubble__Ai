import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import StatusBadge from "../../components/StatusBadge";

/**
 * 🔌 FUTURE API SHAPE (example)
 * GET /interactions/:id
 */
const mockFetchEmailInteraction = (id) =>
  Promise.resolve({
    id,
    channel: "Email",
    agent: "Smith",
    date: "Tue, Nov 12, 2025",
    time: "4:25 PM",
    status: "Declined",
    interactionType: "Weekly",
    emails: [
      {
        from: "Customer",
        body: `Hi Smith,

Hope you are doing well.

I need your help.`,
      },
      {
        from: "Agent",
        body: `Hello Mr,

Hope you are doing well.

I need your help.`,
      },
    ],
  });

export default function EmailInteractionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // 🔹 API driven state
  const [interaction, setInteraction] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  /**
   * 🔁 FETCH INTERACTION (API READY)
   */
  useEffect(() => {
    setLoading(true);

    mockFetchEmailInteraction(id).then((data) => {
      setInteraction(data);
      setStatus(data.status);
      setLoading(false);
    });
  }, [id]);

  /**
   * 🔁 STATUS UPDATE HANDLER (API READY)
   */
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);

    // 🔴 FUTURE API CALL
    // PATCH /interactions/:id
    // fetch(`/api/interactions/${id}`, {
    //   method: "PATCH",
    //   body: JSON.stringify({ status: newStatus }),
    // });
  };

  if (loading || !interaction) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading email interaction...
      </div>
    );
  }

  return (
    <div className="p-4 min-h-screen">
      <div className="w-full bg-white rounded-xl shadow-lg min-h-[calc(100vh-96px)] grid grid-cols-1 lg:grid-cols-3 overflow-hidden">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 p-10 overflow-y-auto">

          {/* Back */}
          <button
            onClick={() => navigate("/interactions")}
            className="mb-8 text-sm text-white hover:text-black transition border rounded p-1 bg-[#8BC43D] cursor-pointer"
          >
            ← Back to Interactions List
          </button>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold flex items-center gap-2">
              📧 Email
            </h2>

            <div className="flex flex-wrap gap-6 mt-3 text-sm text-gray-500">
              <span>👤 {interaction.agent}</span>
              <span>📅 {interaction.date}</span>
              <span>⏰ {interaction.time}</span>
            </div>
          </div>

          {/* Email Thread */}
          <div className="mb-12">
            <p className="text-sm font-medium mb-4">Email Details</p>

            <div className="space-y-6">
              {interaction.emails.map((mail, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 text-sm border
                    ${
                      mail.from === "Agent"
                        ? "bg-gray-50"
                        : "bg-white shadow-sm"
                    }`}
                >
                  <p className="font-medium mb-2 text-gray-700">
                    {mail.from}
                  </p>
                  <p className="leading-relaxed text-gray-600 whitespace-pre-line">
                    {mail.body}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-4 text-sm text-[#8BC43D] hover:underline">
              more
            </button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="border-l bg-gray-50 p-8 flex flex-col justify-between">

          <div className="space-y-6">

            {/* 🔥 STATUS TOGGLE (API READY) */}
            <div className="flex gap-2 bg-white rounded-full p-1 shadow-inner">
              <button
                onClick={() => handleStatusChange("Confirmed")}
                className={`flex-1 py-2 rounded-full text-sm font-semibold transition cursor-pointer
                  ${
                    status === "Confirmed"
                      ? "bg-[#8BC43D] text-white shadow-md"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
              >
                Confirmed
              </button>

              <button
                onClick={() => handleStatusChange("Declined")}
                className={`flex-1 py-2 rounded-full text-sm font-semibold transition cursor-pointer 
                  ${
                    status === "Declined"
                      ? "bg-red-500 text-white shadow-md"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
              >
                Declined
              </button>
            </div>

            {/* Info Card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#8BC43D] to-[#6fa82f] text-white p-6 space-y-2 shadow-md">
              <p className="text-sm">
                <b>Interaction ID:</b> {interaction.id}
              </p>
              <p className="text-sm">
                <b>Interaction type:</b> {interaction.interactionType}
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-400">
            Last updated just now
          </p>
        </div>
      </div>
    </div>
  );
}
