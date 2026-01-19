import logo from "../../assets/images/S Logo.png";

export default function AuthHeader({ title, subtitle, desc }) {
  return (
    <div className="mb-6 text-center">
      {/* Logo + Brand Name */}
      <div className="mb-4 flex flex-col items-center">
        <img
          src={logo}
          alt="Spartacus Bubble"
          className="h-12 w-auto object-contain"
        />

        <p className="mt-1 text-xs font-semibold tracking-wide text-gray-800">
          SPARTACUS BUBBLE
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-[#8BC53F] leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-[#8BC53F] font-medium leading-tight">
          {subtitle}
        </p>
      )}

      {desc && (
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          {desc}
        </p>
      )}
    </div>
  );
}
