import { useState } from "react";
import SearchInput from "../components/SearchInput";
import InteractionTable from "../components/InteractionTable";
import InteractionCard from "../components/InteractionCard";

/* Dummy data (API ready) */
const data = [
  {
    id: "#1233",
    name: "Kathryn Murphy",
    email: "bockely@att.com",
    phone: "(201) 555-0124",
    date: "2025-10-20",
    assignedBy: "N/A",
    progress: "Confirmed",
    bookingType: "New",
    bookingInfo: "Confirmed",
  },
  {
    id: "#1234",
    name: "Devon Lane",
    email: "csilvers@rizon.com",
    phone: "(219) 555-0114",
    date: "2025-10-18",
    assignedBy: "N/A",
    progress: "Need Staff",
    bookingType: "Existing",
    bookingInfo: "Decline",
  },
  {
    id: "#1235",
    name: "Foysal Rahman",
    email: "qamaho@mail.com",
    phone: "(316) 555-0116",
    date: "2025-10-19",
    assignedBy: "Admin",
    progress: "Confirmed",
    bookingType: "Urgent",
    bookingInfo: "Confirmed",
  },
  {
    id: "#1235",
    name: "Foysal Rahman",
    email: "qamaho@mail.com",
    phone: "(316) 555-0116",
    date: "2025-10-19",
    assignedBy: "Admin",
    progress: "Need Human Attention",
    bookingType: "Urgent",
    bookingInfo: "Confirmed",
  },
  {
    id: "#1235",
    name: "Foysal Rahman",
    email: "qamaho@mail.com",
    phone: "(316) 555-0116",
    date: "2025-10-19",
    assignedBy: "Admin",
    progress: "Confirmed",
    bookingType: "Urgent",
    bookingInfo: "Decline",
  },
  {
    id: "#1235",
    name: "Foysal Rahman",
    email: "qamaho@mail.com",
    phone: "(316) 555-0116",
    date: "2025-10-19",
    assignedBy: "Admin",
    progress: "Need Human Attention",
    bookingType: "Urgent",
    bookingInfo: "Decline",
  },
];

export default function Interactions() {
  /* Search */
  const [search, setSearch] = useState("");

  /* Filters */
  const [progress, setProgress] = useState("All");
  const [bookingType, setBookingType] = useState("All");
  const [bookingInfo, setBookingInfo] = useState("All");
  const [dateSort, setDateSort] = useState("oldest");

  /* 🔥 FULL FILTER + SORT PIPELINE */
  const filteredData = data
    // Search
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase())
    )
    // Progress
    .filter((item) =>
      progress === "All" ? true : item.progress === progress
    )
    // Booking Type
    .filter((item) =>
      bookingType === "All" ? true : item.bookingType === bookingType
    )
    // Booking Info
    .filter((item) =>
      bookingInfo === "All" ? true : item.bookingInfo === bookingInfo
    )
    // Date sort
    .sort((a, b) =>
      dateSort === "oldest"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
    );

  return (
    <div className="p-4 sm:p-6 lg:p-10 space-y-8">

      {/* 🔍 Search */}
      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Search interaction..."
      />

      {/* 🖥 Desktop Table */}
      <div className="hidden lg:block">
        <InteractionTable
          data={filteredData}
          progress={progress}
          setProgress={setProgress}
          bookingType={bookingType}
          setBookingType={setBookingType}
          bookingInfo={bookingInfo}
          setBookingInfo={setBookingInfo}
          dateSort={dateSort}
          setDateSort={setDateSort}
        />
      </div>

      {/* 📱 Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {filteredData.map((item, index) => (
          <InteractionCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
