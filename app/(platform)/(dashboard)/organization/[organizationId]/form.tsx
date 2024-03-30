"use client";

import { create } from "@/actions/create-boards";
import { useFormState } from "react-dom";
import { FormButton } from "./form-button";
import { FormInput } from "./form-input";

export const Form = () => {
  const initialState = {
    message: "",
    errors: {},
  };
  //  function to handle form submission and initial state
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={state?.errors} />
      </div>
      <FormButton />
    </form>
  );
};
