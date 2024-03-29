"use client";

import { create } from "@/actions/create-boards";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";

export const Form = () => {
  const initialState = {
    message: "",
    errors: {},
  };
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="p-1 border border-black"
        />
        {state?.errors?.title ? (
          <div>
            {state.errors.title.map((error, index) => (
              <p key={index} className="text-rose-500">
                {error}
              </p>
            ))}
          </div>
        ) : null}
      </div>
      <Button type="submit">Create</Button>
    </form>
  );
};
