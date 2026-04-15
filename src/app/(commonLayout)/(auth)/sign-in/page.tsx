import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignInForm from "@/src/app/components/auth/signin-form";

const SignInPage = () => {
  return (
    <>
      <div className="bg-radial from-white from-40% to-blue-200 min-h-screen animate-pulse absolute inset-0"></div>
      <div className="relative z-20 flex min-h-svh items-center justify-center p-6 md:p-10">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Resume Your Hunt for the dream job !
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignInForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SignInPage;
