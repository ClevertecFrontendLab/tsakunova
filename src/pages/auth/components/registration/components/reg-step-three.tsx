import { FC } from 'react';
import { Control, FieldErrors, FieldValues, UseFormClearErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { CustomInput } from 'components/forms/custom-input';
import { InputLabel } from 'components/forms/custom-input/custom-input.style';
import { CustomMaskedInput } from 'components/forms/custom-masked-input/custom-masked-input';
import { useIsBlurWithValidation } from 'hooks/use-is-blur-with-validation';
import { ContainerInputWithLabel, FormSection, HintErrorSpan } from 'pages/auth/auth.style';
import { FORM_INPUT_TEXT, registerStepThreeValidation } from 'pages/auth/const';
import { UserAPIFields, ValidationErrors } from 'types/enum';

export const RegStepThree: FC<{
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>;
  clearErrors: UseFormClearErrors<FieldValues>;
}> = ({ register, watch, errors, control, clearErrors }) => {
  const { isBlur, setIsBlur, isEmptyBluredLabel, watchField } = useIsBlurWithValidation(
    UserAPIFields.email,
    watch,
    errors
  );

  return (
    <FormSection>
      <CustomMaskedInput watch={watch} errors={errors} control={control} />
      <ContainerInputWithLabel>
        <CustomInput
          name={UserAPIFields.email}
          placeholder={FORM_INPUT_TEXT.regEmail.placeholder}
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
            isEmptyBluredLabel && <HintErrorSpan isError={true}>{ValidationErrors.emptyField}</HintErrorSpan>
          )}
        </InputLabel>
      </ContainerInputWithLabel>
    </FormSection>
  );
};
