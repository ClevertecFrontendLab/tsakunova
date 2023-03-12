import { FC, Fragment, useCallback } from 'react';
import { FieldErrors, FieldValues, UseFormClearErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { CustomInput } from 'components/forms/custom-input';
import { InputLabel } from 'components/forms/custom-input/custom-input.style';
import { DefaultLabel } from 'components/forms/default-label';
import { useIsBlurWithValidation } from 'hooks/use-is-blur-with-validation';
import { ContainerInputWithLabel, HintErrorSpan } from 'pages/auth/auth.style';
import { FORM_INPUT_TEXT, registerStepOneValidation } from 'pages/auth/const';
import { UserAPIFields, ValidationErrors } from 'types/enum';

export const InputPassword: FC<{
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
  onBlur?: (value: boolean) => void;
}> = ({ errors, watch, register, clearErrors, onBlur = () => {} }) => {
  const { isBlur, setIsBlur, isEmptyBluredLabel, watchField } = useIsBlurWithValidation(
    UserAPIFields.password,
    watch,
    errors
  );

  const onBlurHandler = useCallback(
    (value: boolean) => {
      setIsBlur(value);
      onBlur(value);
    },
    [onBlur, setIsBlur]
  );

  return (
    <ContainerInputWithLabel>
      <CustomInput
        name={UserAPIFields.password}
        placeholder={FORM_INPUT_TEXT.regPass.placeholder}
        type='password'
        required={true}
        register={register}
        validation={registerStepOneValidation.password}
        watch={watch}
        errors={errors}
        setIsBlur={onBlurHandler}
        clearErrors={clearErrors}
      />
      <InputLabel data-test-id='hint' isError={isEmptyBluredLabel}>
        {errors[UserAPIFields.password]?.type === 'isLengthValue' ||
        errors[UserAPIFields.password]?.type === 'isUpperCaseValue' ||
        errors[UserAPIFields.password]?.type === 'isNumberValue' ? (
          <Fragment>
            {'Пароль '}
            <HintErrorSpan
              isError={
                (isBlur && !!errors[UserAPIFields.password]) ||
                errors[UserAPIFields.password]?.type === 'isLengthValue' ||
                !registerStepOneValidation.password.isLengthValue(watchField)
              }
            >
              {ValidationErrors.length}
            </HintErrorSpan>
            {', '}
            <HintErrorSpan
              isError={
                (isBlur && !!errors[UserAPIFields.password]) ||
                errors[UserAPIFields.password]?.type === 'isUpperCaseValue' ||
                !registerStepOneValidation.password.isUpperCaseValue(watchField)
              }
            >
              {ValidationErrors.upperCase}
            </HintErrorSpan>
            {' и '}
            <HintErrorSpan
              isError={
                (isBlur && !!errors[UserAPIFields.password]) ||
                errors[UserAPIFields.password]?.type === 'isNumberValue' ||
                !registerStepOneValidation.password.isNumberValue(watchField)
              }
            >
              {ValidationErrors.passNumber}
            </HintErrorSpan>
          </Fragment>
        ) : (
          <DefaultLabel isEmptyBluredLabel={isEmptyBluredLabel} label={FORM_INPUT_TEXT.regPass.label} />
        )}
      </InputLabel>
    </ContainerInputWithLabel>
  );
};
