import { useMutation } from "@apollo/client";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/button";
import TextInput from "../../components/TextInput/text-input";
import { ILoginResponse, MutationVariable } from "./interfaces";
import { LOGIN_ACTION } from "./queries";

function SignIn() {
 
  const formRef = useRef<{ [key: string]: string }>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [formError, setFormError] = useState<string | null>(null);

  const [postLogin, { loading, data }] = useMutation<
    ILoginResponse,
    MutationVariable
  >(LOGIN_ACTION);

  useEffect(() => {
    if (data) {
      if (data.signIn.errors.length) {
        setFormError(data.signIn.errors[0].message);
      }

      if (data.signIn.token) {
        setFormError(null);
        localStorage.setItem("token", data.signIn.token);
        navigate("/posts",{replace:true});
      }
    }
  }, [data, navigate]);

  function onHandleInput(name: string, value: string) {
    formRef.current[name] = value;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    postLogin({
      variables: {
        credentials: {
          email: formRef.current.email,
          password: formRef.current.password,
        },
      },
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="my-2">
        <TextInput
          name="email"
          initialValue=""
          placeholder="Email address"
          onHandleInput={onHandleInput}
          type="email"
          required={true}
        />
      </div>
      <div className="my-2">
        <TextInput
          name="password"
          initialValue=""
          placeholder="Password"
          onHandleInput={onHandleInput}
          type="password"
          required={true}
        />
      </div>
      <div className="my-2">
        <Button onClick={() => null} disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </Button>
      </div>

      {formError ? (
        <p className="my-2" style={{ color: "red" }}>
          {formError}
        </p>
      ) : null}
    </form>
  );
}

export default SignIn;
