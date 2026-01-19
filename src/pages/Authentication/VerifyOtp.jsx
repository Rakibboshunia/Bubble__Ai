import {
  AuthLayout,
  AuthCard,
  AuthHeader,
  OTPInput,
  SubmitButton,
} from "../../components/auth";

export default function VerifyOtp() {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader
          title="Spartacus Bubble"
          subtitle="Check your Email"
          desc="We sent a verification code to your email"
        />

        <OTPInput />
        <SubmitButton text="Verify" />
      </AuthCard>
    </AuthLayout>
  );
}
