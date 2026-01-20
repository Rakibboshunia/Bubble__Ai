import { useNavigate } from "react-router-dom";
import {
  AuthLayout,
  AuthCard,
  AuthHeader,
  TextInput,
  PasswordInput,
  SubmitButton,
} from "../../components/auth";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ dummy login (for now)
    localStorage.setItem(
      "user",
      JSON.stringify({ role: "ADMIN" })
    );

    // ✅ redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader
          title="Spartacus Bubble"
          subtitle="Login to Account"
          desc="Please enter your email and password to continue"
        />

        <form onSubmit={handleSubmit}>
          <TextInput
            label="Email address"
            placeholder="Enter your email"
          />

          <PasswordInput label="Password" />

          <div className="flex justify-between items-center text-sm mb-6">
            <label className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="accent-[#8BC53F] cursor-pointer"
              />
              Remember Password
            </label>

            <span 
              onClick={() => navigate("/forget-password")}
              className="underline cursor-pointer">
              Forget Password?
            </span>
          </div>

          <SubmitButton text="Sign in" />
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
