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

    // UI only login → direct dashboard
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
          <TextInput label="Email address" placeholder="Enter your email" />
          <PasswordInput label="Password" />
          <SubmitButton text="Sign in" />
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
