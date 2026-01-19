import {
  AuthLayout,
  AuthCard,
  AuthHeader,
  TextInput,
  SubmitButton,
} from "../../components/auth";

export default function ForgetPassword() {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader
          title="Spartacus Bubble"
          subtitle="Forget Password?"
          desc="Please enter your email to get verification code"
        />

        <form>
          <TextInput label="Email address" />
          <SubmitButton text="Continue" />
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
