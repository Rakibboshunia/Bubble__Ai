import {
  AuthLayout,
  AuthCard,
  AuthHeader,
  PasswordInput,
  SubmitButton,
} from "../../components/auth";

export default function NewPassword() {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader
          title="Spartacus Bubble"
          subtitle="Set a new password"
        />

        <form>
          <PasswordInput label="New Password" />
          <PasswordInput label="Confirm Password" />
          <SubmitButton text="Reset Password" />
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
