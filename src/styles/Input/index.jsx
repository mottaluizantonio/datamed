import { FieldBox, Text } from "../theme";

export const Input = ({
  width = "100%",
  height = "auto",
  hidden = false,
  label,
  register,
  name,
  errorMsg,
  ...rest
}) => {
  return (
    <FieldBox
      width={width}
      style={{ input: { height } }}
      hidden={hidden}
      error={!!errorMsg}
    >
      <label>{label}</label>

      <input {...register(name)} {...rest} />
      <Text color="error">{errorMsg}</Text>
    </FieldBox>
  );
};
