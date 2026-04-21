import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignUpForm from "@/src/app/components/auth/siginup-form";

const SignUpPage = () => {
  return (
    <>
      <div className="bg-radial from-white from-10% to-purple-200 min-h-screen animate-pulse absolute inset-0"></div>
      <div className="relative z-20 flex min-h-svh items-center justify-center p-6 md:p-10">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Start the Hunt for the dream job !
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignUpForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SignUpPage;
