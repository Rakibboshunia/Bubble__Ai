export default function OTPInput() {
  return (
    <div className="flex justify-center gap-2 mb-6">
      {[...Array(6)].map((_, i) => (
        <input
          key={i}
          maxLength={1}
          className="w-10 h-10 border border-[#8BC53F] rounded-md text-center text-lg focus:ring-2 focus:ring-[#8BC53F]"
        />
      ))}
    </div>
  );
}
