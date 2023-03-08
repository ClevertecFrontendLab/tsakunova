import { FC } from 'react';
import { FieldErrors, FieldValues, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { CustomInput } from 'components/forms/custom-input';
import { Regex } from 'consts';
import { FormSection } from 'pages/auth/auth.style';
import { FORM_INPUT_TEXT } from 'pages/auth/const';
import { UserAPIFields } from 'types/enum';

export const RegStepOne: FC<{
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
}> = (props) => (
  <FormSection>
    <CustomInput
      {...props}
      name={UserAPIFields.username}
      placeholder={FORM_INPUT_TEXT.regLogin.placeholder}
      label={FORM_INPUT_TEXT.regLogin.label}
      type='text'
      validation={{
        required: true,
        pattern: Regex.login,
      }}
    />
    <CustomInput
      {...props}
      name={UserAPIFields.password}
      placeholder={FORM_INPUT_TEXT.regPass.placeholder}
      label={FORM_INPUT_TEXT.regPass.label}
      type='password'
      validation={{
        required: true,
        minLength: 8,
        pattern: Regex.password,
      }}
    />
  </FormSection>
);
