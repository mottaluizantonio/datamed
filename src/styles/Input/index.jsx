import { FieldBox, Text } from "../theme";

export const Input = ({ label, register, name, errorMsg, ...rest }) => {
  return (
    <FieldBox height="auto" error={!!errorMsg}>
      <label>{label}</label>

      <input {...register(name)} {...rest} />
      <Text color="error">{errorMsg}</Text>
    </FieldBox>
  );
};
