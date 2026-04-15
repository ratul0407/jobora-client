import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const SignInForm = () => {
  return (
    <>
      <div>
        <form>
          <FieldGroup>
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
            <Button type="submit">Sign In</Button>
          </FieldGroup>
        </form>
      </div>
    </>
  );
};
export default SignInForm;
