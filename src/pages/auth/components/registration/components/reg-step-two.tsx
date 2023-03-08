import { FC } from 'react';
import { FieldErrors, FieldValues, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { CustomInput } from 'components/forms/custom-input';
import { FormSection } from 'pages/auth/auth.style';
import { FORM_INPUT_TEXT } from 'pages/auth/const';
import { UserAPIFields } from 'types/enum';

export const RegStepTwo: FC<{
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
}> = (props) => (
  <FormSection>
    <CustomInput
      {...props}
      name={UserAPIFields.firstName}
      placeholder={FORM_INPUT_TEXT.regName.placeholder}
      label={FORM_INPUT_TEXT.regName.label}
      type='text'
      validation={{
        required: true,
      }}
    />
    <CustomInput
      {...props}
      name={UserAPIFields.lastName}
      placeholder={FORM_INPUT_TEXT.regSurname.placeholder}
      label={FORM_INPUT_TEXT.regSurname.label}
      type='text'
      validation={{
        required: true,
      }}
    />
  </FormSection>
);
