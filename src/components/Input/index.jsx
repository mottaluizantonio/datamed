import { FieldBox } from "../../styles/theme";

const Input = ({ label, register, name, error, erroCor, ...rest }) => {
  console.log(!!error?.name);

  return (
    <>
      <FieldBox error={erroCor}>
        <label>
          {label} {!!error && <span> - {error}</span>}
        </label>

        <input {...register(name)} {...rest} />
      </FieldBox>
    </>
  );
};

export default Input;
