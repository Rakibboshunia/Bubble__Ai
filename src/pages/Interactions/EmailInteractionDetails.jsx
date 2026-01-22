import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import StatusBadge from "../../components/StatusBadge";

export default function EmailInteractionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("Pending");

  return (
    <div className="p-6 min-h-screen bg-linear-to-br from-blue-50 to-white">
      <div className="w-full bg-white rounded-3xl shadow-2xl h-[calc(100vh-80px)] flex flex-col lg:flex-row">

        {/* LEFT */}
        <div className="flex-1 p-8 overflow-y-auto">

          {/* BACK BUTTON */}
          <button
            onClick={() => navigate("/interactions")}
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-black mb-6 border rounded-xl p-2 bg-[#8BC43D] cursor-pointer"
          >
            ← Back to Interactions
          </button>

          <h2 className="text-3xl font-bold text-[#8BC43D] mb-1">
            📧 Email Interaction
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Interaction ID • {id}
          </p>

          {/* EMAIL THREAD */}
          <section className="space-y-6 mb-12">
            <div className="bg-blue-50 rounded-xl p-5 text-sm">
              <p className="text-[#8BC43D] font-medium mb-1">Customer</p>
              <p>I need help with my order.</p>
            </div>

            <div className="bg-[#8BC43D] text-white rounded-xl p-5 text-sm">
              <p className="font-medium mb-1">Agent Reply</p>
              <p>Sure, we are checking it.</p>
            </div>
          </section>

          {/* TIMELINE */}
          <section>
            <p className="text-sm text-gray-500 mb-4">Activity Timeline</p>

            <div className="relative border-l-2 border-blue-200 pl-6 space-y-6 text-sm">
              <div>
                <span className="absolute -left-1.75 top-1 w-3 h-3 bg-[#8BC43D] rounded-full" />
                <p className="font-medium">Email received</p>
                <p className="text-gray-400">9:15 AM</p>
              </div>

              <div>
                <span className="absolute -left-1.75 top-14 w-3 h-3 bg-[#8BC43D] rounded-full" />
                <p className="font-medium">Agent replied</p>
                <p className="text-gray-400">9:20 AM</p>
              </div>

              <div>
                <span className="absolute -left-1.75 top-28 w-3 h-3 bg-[#8BC43D] rounded-full" />
                <p className="font-medium">Status updated</p>
                <p className="text-gray-400">9:25 AM</p>
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
              className="w-full rounded-xl bg-blue-50 px-4 py-3 text-sm outline-none"
            >
              <option>Pending</option>
              <option>Confirmed</option>
              <option>Declined</option>
            </select>

            <div className="bg-[#8BC43D] text-white rounded-2xl p-5 text-sm">
              <p><b>Channel:</b> Email</p>
              <p><b>Assigned:</b> Smith</p>
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
