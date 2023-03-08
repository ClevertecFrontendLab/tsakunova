import { FC } from 'react';
import { FieldErrors, FieldValues, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { CustomInput } from 'components/forms/custom-input';
import { Regex } from 'consts';
import { FormSection } from 'pages/auth/auth.style';
import { FORM_INPUT_TEXT } from 'pages/auth/const';
import { UserAPIFields } from 'types/enum';

export const RegStepThree: FC<{
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
}> = (props) => (
  <FormSection>
    <CustomInput
      {...props}
      name={UserAPIFields.phone}
      placeholder={FORM_INPUT_TEXT.regPhone.placeholder}
      label={FORM_INPUT_TEXT.regPhone.label}
      type='phone'
      validation={{
        required: true,
        pattern: Regex.phone,
      }}
    />
    <CustomInput
      {...props}
      name={UserAPIFields.email}
      placeholder={FORM_INPUT_TEXT.regEmail.placeholder}
      label={FORM_INPUT_TEXT.regEmail.label}
      type='email'
      validation={{
        required: true,
        pattern: Regex.email,
      }}
    />
  </FormSection>
);
