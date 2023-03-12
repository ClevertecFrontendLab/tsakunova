import { FC, Fragment } from 'react';
import { FieldErrors, FieldValues, UseFormClearErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { CustomInput } from 'components/forms/custom-input';
import { InputLabel } from 'components/forms/custom-input/custom-input.style';
import { DefaultLabel } from 'components/forms/default-label';
import { useIsBlurWithValidation } from 'hooks/use-is-blur-with-validation';
import { ContainerInputWithLabel, HintErrorSpan } from 'pages/auth/auth.style';
import { FORM_INPUT_TEXT, registerStepOneValidation } from 'pages/auth/const';
import { UserAPIFields, ValidationErrors } from 'types/enum';

export const InputUsername: FC<{
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
}> = ({ errors, watch, register, clearErrors }) => {
  const { isBlur, setIsBlur, isEmptyBluredLabel, watchField } = useIsBlurWithValidation(
    UserAPIFields.username,
    watch,
    errors
  );

  return (
    <ContainerInputWithLabel>
      <CustomInput
        name={UserAPIFields.username}
        placeholder={FORM_INPUT_TEXT.regLogin.placeholder}
        type='text'
        required={true}
        register={register}
        validation={registerStepOneValidation.username}
        watch={watch}
        errors={errors}
        setIsBlur={setIsBlur}
        clearErrors={clearErrors}
      />
      <InputLabel data-test-id='hint' isError={isEmptyBluredLabel}>
        {errors[UserAPIFields.username]?.type === 'isStringValue' ||
        errors[UserAPIFields.username]?.type === 'isNumberValue' ? (
          <Fragment>
            {'Используйте для логина '}
            <HintErrorSpan
              isError={
                (isBlur && !!errors[UserAPIFields.username]) ||
                errors[UserAPIFields.username]?.type === 'isStringValue' ||
                !registerStepOneValidation.username.isStringValue(watchField)
              }
            >
              {ValidationErrors.latin}
            </HintErrorSpan>
            {' и '}
            <HintErrorSpan
              isError={
                (isBlur && !!errors[UserAPIFields.username]) ||
                errors[UserAPIFields.username]?.type === 'isNumberValue' ||
                !registerStepOneValidation.username.isNumberValue(watchField)
              }
            >
              {ValidationErrors.number}
            </HintErrorSpan>
          </Fragment>
        ) : (
          <DefaultLabel isEmptyBluredLabel={isEmptyBluredLabel} label={FORM_INPUT_TEXT.regLogin.label} />
        )}
      </InputLabel>
    </ContainerInputWithLabel>
  );
};
