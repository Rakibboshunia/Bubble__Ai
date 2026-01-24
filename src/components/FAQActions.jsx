export default function FAQActions({ onEdit, onDelete }) {
  return (
    <div className="flex gap-4 mt-3 text-md">
      <button
        onClick={onEdit}
        className="text-[#8BC43D] font-medium border-2 rounded-md p-1 cursor-pointer"
      >
        Edit
      </button>
      <button
        onClick={onDelete}
        className="text-red-500 font-medium border-2 rounded-md p-1 cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
}
