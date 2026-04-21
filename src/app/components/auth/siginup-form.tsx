import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const SignUpForm = () => {
  return (
    <>
      <div>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="fist_name">First Name</FieldLabel>
              <Input
                id="fist_name"
                name="fist_name"
                type="text"
                placeholder="First Name"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="last_name">
                Last Name{" "}
                <span className="text-gray-400 text-sm">(optional)</span>
              </FieldLabel>
              <Input
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Last Name"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" name="email" type="email" placeholder="Email" />
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
              />
            </Field>
          </FieldGroup>
          <FieldGroup className="mt-4">
            <Button type="submit">Sign Up</Button>
            <FieldDescription>
              Already have an account? <Link href="/sign-in">Sign in</Link>
            </FieldDescription>
          </FieldGroup>
        </form>
      </div>
    </>
  );
};
export default SignUpForm;
