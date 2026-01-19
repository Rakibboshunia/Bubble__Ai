export default function AuthCard({ children }) {
  return (
    <div
      className="
        bg-white
        w-full max-w-md
        px-8 py-10
        rounded-2xl
        border border-gray-100
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        transition
        duration-300 cursor-pointer
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
      "
    >
      {children}
    </div>
  );
}
