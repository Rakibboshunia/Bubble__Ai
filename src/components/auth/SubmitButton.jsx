export default function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="w-full bg-[#8BC53F] hover:bg-[#7bb136] text-white py-2 rounded-md font-medium transition"
    >
      {text}
    </button>
  );
}
