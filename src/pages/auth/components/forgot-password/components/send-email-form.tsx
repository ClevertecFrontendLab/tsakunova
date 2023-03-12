import { FC } from 'react';
import { FieldErrors, FieldValues, UseFormClearErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { CustomInput } from 'components/forms/custom-input';
import { InputLabel } from 'components/forms/custom-input/custom-input.style';
import { DefaultLabel } from 'components/forms/default-label';
import { useIsBlurWithValidation } from 'hooks/use-is-blur-with-validation';
import { ContainerInputWithLabel, HintErrorSpan } from 'pages/auth/auth.style';
import { FORM_INPUT_TEXT, registerStepThreeValidation } from 'pages/auth/const';
import { UserAPIFields, ValidationErrors } from 'types/enum';

type Props = {
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
};
export const SendEmailForm: FC<Props> = ({ register, watch, errors, clearErrors }) => {
  const { isBlur, setIsBlur, isEmptyBluredLabel, watchField } = useIsBlurWithValidation(
    UserAPIFields.email,
    watch,
    errors
  );

  return (
    <ContainerInputWithLabel>
      <CustomInput
        name={UserAPIFields.email}
        placeholder={FORM_INPUT_TEXT.forgotPassword.placeholder}
        required={true}
        register={register}
        validation={registerStepThreeValidation.email}
        watch={watch}
        errors={errors}
        setIsBlur={setIsBlur}
        clearErrors={clearErrors}
        type='email'
      />
      <InputLabel data-test-id='hint' isError={isEmptyBluredLabel}>
        {errors[UserAPIFields.email]?.type === 'isValidEmail' ? (
          <HintErrorSpan
            isError={
              (isBlur && !!errors[UserAPIFields.email]) ||
              errors[UserAPIFields.email]?.type === 'isValidEmail' ||
              !registerStepThreeValidation.email.isValidEmail(watchField)
            }
          >
            {ValidationErrors.email}
          </HintErrorSpan>
        ) : (
          <DefaultLabel isEmptyBluredLabel={isEmptyBluredLabel} label={FORM_INPUT_TEXT.forgotPassword.label} />
        )}
      </InputLabel>
    </ContainerInputWithLabel>
  );
};
