import { FC, Fragment, useCallback } from 'react';
import { FieldErrors, FieldValues, UseFormClearErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { CustomInput } from 'components/forms/custom-input';
import { InputLabel } from 'components/forms/custom-input/custom-input.style';
import { useIsBlurWithValidation } from 'hooks/use-is-blur-with-validation';
import { ContainerInputWithLabel, HintErrorSpan } from 'pages/auth/auth.style';
import { FORM_INPUT_TEXT } from 'pages/auth/const';
import { UserAPIFields, ValidationErrors } from 'types/enum';

import { InputPassword } from '../../registration/components/step-one/input-password';

type Props = {
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
  isValidPass: boolean;
  onBlur: (value: boolean) => void;
};
export const ResetPasswordForm: FC<Props> = ({ register, watch, errors, clearErrors, isValidPass, onBlur }) => {
  const { isBlur, setIsBlur, isEmptyBluredLabel } = useIsBlurWithValidation(
    UserAPIFields.repeatPassword,
    watch,
    errors
  );

  const blurHandler = useCallback(
    (value: boolean) => {
      setIsBlur(value);
      onBlur(value);
    },
    [onBlur, setIsBlur]
  );

  return (
    <Fragment>
      <InputPassword register={register} watch={watch} errors={errors} clearErrors={clearErrors} onBlur={onBlur} />
      <ContainerInputWithLabel>
        <CustomInput
          register={register}
          watch={watch}
          errors={errors}
          clearErrors={clearErrors}
          name={UserAPIFields.repeatPassword}
          placeholder={FORM_INPUT_TEXT.forgotAddNewPasswordRepeat.placeholder}
          type='password'
          required={true}
          setIsBlur={blurHandler}
          withCheckmark={false}
        />
        {!isValidPass && isBlur && (
          <InputLabel data-test-id='hint' isError={true}>
            {isEmptyBluredLabel ? (
              <HintErrorSpan isError={true}>{ValidationErrors.emptyField}</HintErrorSpan>
            ) : (
              ValidationErrors.passRepeat
            )}
          </InputLabel>
        )}
      </ContainerInputWithLabel>
    </Fragment>
  );
};
