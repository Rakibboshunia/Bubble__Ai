import {
  AuthLayout,
  AuthCard,
  AuthHeader,
  TextInput,
  PasswordInput,
  SubmitButton,
} from "../../components/auth";

export default function Login() {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader
          title="Spartacus Bubble"
          subtitle="Login to Account"
          desc="Please enter your email and password to continue"
        />

        <form>
          <TextInput
            label="Email address"
            placeholder="admin@gmail.com"
          />

          <PasswordInput label="Password" />

          <div className="flex justify-between items-center text-sm mb-6">
            <label className="flex gap-2 items-center">
              <input type="checkbox" className="accent-[#8BC53F]" />
              Remember Password
            </label>
            <span className="underline cursor-pointer">
              Forget Password?
            </span>
          </div>

          <SubmitButton text="Sign in" />
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
