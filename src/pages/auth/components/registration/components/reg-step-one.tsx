import { FC } from 'react';
import { FieldErrors, FieldValues, UseFormClearErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { FormSection } from 'pages/auth/auth.style';

import { InputPassword } from './step-one/input-password';
import { InputUsername } from './step-one/input-username';

export const RegStepOne: FC<{
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
}> = ({ errors, watch, register, clearErrors }) => (
  <FormSection>
    <InputUsername register={register} watch={watch} errors={errors} clearErrors={clearErrors} />
    <InputPassword register={register} watch={watch} errors={errors} clearErrors={clearErrors} />
  </FormSection>
);
