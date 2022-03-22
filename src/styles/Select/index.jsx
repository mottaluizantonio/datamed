import { FieldBox } from "../theme";

export const Select = ({
  width = "100%",
  height = "auto",
  hidden = false,
  label,
  register,
  name,
  errorMsg,
  option1,
  option2,
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
      <select {...register(name)} {...rest}>
        <option>{option1}</option>
        <option>{option2}</option>
      </select>
    </FieldBox>
  );
};
