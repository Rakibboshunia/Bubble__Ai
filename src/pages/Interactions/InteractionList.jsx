import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import InteractionTable from "../../components/InteractionTable";
import SearchInput from "../../components/SearchInput";

/* Dummy Data */
const DATA = [
  { id: "1", category: "Phone", ref: "01711XXXX", type: "Incoming Call" },
  { id: "2", category: "Mail", ref: "user@mail.com", type: "Email Sent" },
  { id: "3", category: "Phone", ref: "016345XXXX", type: "Missed Call" },
  { id: "4", category: "Mail", ref: "user1@mail.com", type: "Outgoing Call" },
  { id: "5", category: "Phone", ref: "user2@mail.com", type: "Email Received" },
];

export default function Interactions() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [type, setType] = useState("all");

  const navigate = useNavigate();

  /* FILTER LOGIC (THIS IS THE KEY PART) */
  const filteredData = useMemo(() => {
    return DATA.filter((item) => {
      const matchSearch =
        item.ref.toLowerCase().includes(search.toLowerCase()) ||
        item.type.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        category === "all" || item.category === category;

      const matchType =
        type === "all" || item.type === type; // ✅ exact match

      return matchSearch && matchCategory && matchType;
    });
  }, [search, category, type]);

  const handleView = (item) => {
    item.category === "Phone"
      ? navigate(`/interactions/phone/${item.id}`)
      : navigate(`/interactions/email/${item.id}`);
  };

  return (
    <div className="p-8">
      {/* HEADER */}
      <div className="pb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Interaction List
        </h1>
        <p className="text-gray-500 mt-1">
          A centralized list that displays all interaction records for quick tracking and monitoring.
        </p>
      </div>

      {/* SEARCH */}
      <div className="flex justify-between mb-6">
        <SearchInput value={search} onChange={setSearch} />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl shadow-xl">
        <InteractionTable
          data={filteredData}
          onView={handleView}
          category={category}
          onCategoryChange={setCategory}
          type={type}
          onTypeChange={setType}
        />
      </div>
    </div>
  );
}
