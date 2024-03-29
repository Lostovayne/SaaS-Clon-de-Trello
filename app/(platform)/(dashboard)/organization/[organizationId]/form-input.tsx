interface FormInputProps {
  errors?: {
    title?: string[];
  }
}

export const FormInput = ({ errors }: FormInputProps): JSX.Element => {
  return (
    <div>
      <input
        type="text"
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        className="p-1 border border-black"
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className="text-rose-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};
