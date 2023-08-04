import { ChangeEvent, FC, useMemo } from "react";
import useCustomFormik from "hooks/useCustomFormik";
import { FormikFieldI } from "types/form.type";
import { Box, Input, InputLabel, InputProps } from "@mui/material";
import PERSIAN_TO_ENGLISH_NUMBER_MAP from "constant/maps/persian-to-english-number.map";
import transformWithMap from "utils/transformWithMap";
import FormHelperText from "@mui/material/FormHelperText";

const FormikInput: FC<InputProps & FormikFieldI> = ({
  name,
  formString,
  disabled,
  optional = true,
  ...props
}) => {
  const { error, field, formStrings, helper } = useCustomFormik(
    name,
    formString
  );

  const typeIsNumber = useMemo<boolean>(
    () => props.type === "number",
    [props.type]
  );

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (typeIsNumber) {
      e.target.value = transformWithMap(
        e.target.value,
        PERSIAN_TO_ENGLISH_NUMBER_MAP
      );
    }
    helper.setValue(e.target.value);
  };

  return (
    <Box>
      <InputLabel shrink htmlFor={name}>
        {formStrings.label}
        {!optional ? "*" : ""}
      </InputLabel>
      <Input
        name={name}
        onChange={handleChange}
        onBlur={field.onBlur}
        error={Boolean(error)}
        inputMode={typeIsNumber ? "numeric" : "text"}
        disabled={disabled}
        placeholder={formStrings.placeholder}
        value={field.value}
        sx={{ width: 1, ...props.sx }}
        {...props}
      />
      <FormHelperText error={Boolean(error)} color="annotations.error">
        {error}
      </FormHelperText>
    </Box>
  );
};

export default FormikInput;
