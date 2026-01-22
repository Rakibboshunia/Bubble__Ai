import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import StatusBadge from "../../components/StatusBadge";

export default function PhoneInteractionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("Confirmed");

  return (
    <div className="p-6 min-h-screen bg-linear-to-br from-green-50 to-white">
      <div className="w-full bg-white rounded-3xl shadow-2xl h-[calc(100vh-80px)] flex flex-col lg:flex-row">

        {/* LEFT */}
        <div className="flex-1 p-8 overflow-y-auto">

          {/* BACK BUTTON */}
          <button
            onClick={() => navigate("/interactions")}
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-black mb-6
            border rounded-xl p-2 bg-[#8BC43D] cursor-pointer"
          >
            ← Back to Interactions
          </button>

          <h2 className="text-3xl font-bold text-[#8BC43D] mb-1">
            📞 Phone Interaction
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Interaction ID • {id}
          </p>

          {/* CONVERSATION */}
          <section className="mb-10">
            <p className="text-sm text-gray-500 mb-2">Conversation</p>
            <div className="space-y-3 bg-green-50 rounded-xl p-5 text-sm">
              <p><b>Agent:</b> Hello, how can I help?</p>
              <p><b>Customer:</b> I need support.</p>
              <p><b>Agent:</b> Sure, let me check.</p>
            </div>
          </section>

          {/* AUDIO */}
          <section className="mb-10">
            <p className="text-sm text-gray-500 mb-2">Call Recording</p>
            <audio controls className="w-full">
              <source src="/dummy-call.mp3" />
            </audio>
          </section>

          {/* TIMELINE */}
          <section>
            <p className="text-sm text-gray-500 mb-4">Activity Timeline</p>

            <div className="relative border-l-2 border-green-200 pl-6 space-y-6 text-sm">
              <div>
                <span className="absolute -left-1.75 top-1 w-3 h-3 bg-[#8BC43D] rounded-full" />
                <p className="font-medium">Call received</p>
                <p className="text-gray-400">10:32 AM</p>
              </div>

              <div>
                <span className="absolute -left-1.75 top-14 w-3 h-3 bg-[#8BC43D] rounded-full" />
                <p className="font-medium">Agent responded</p>
                <p className="text-gray-400">10:33 AM</p>
              </div>

              <div>
                <span className="absolute -left-1.75 top-28 w-3 h-3 bg-[#8BC43D] rounded-full" />
                <p className="font-medium">Status updated</p>
                <p className="text-gray-400">10:35 AM</p>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT – STICKY */}
        <div className="w-full lg:w-80 p-6 lg:sticky lg:top-6 bg-white flex flex-col justify-between">
          <div className="space-y-6">
            <StatusBadge status={status} />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full rounded-xl bg-green-50 px-4 py-3 text-sm outline-none"
            >
              <option>Confirmed</option>
              <option>Declined</option>
              <option>Pending</option>
            </select>

            <div className="bg-[#8BC43D] text-white rounded-2xl p-5 text-sm">
              <p><b>Type:</b> Weekly</p>
              <p><b>Agent:</b> Smith</p>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-6">
            Last updated just now
          </p>
        </div>
      </div>
    </div>
  );
}
