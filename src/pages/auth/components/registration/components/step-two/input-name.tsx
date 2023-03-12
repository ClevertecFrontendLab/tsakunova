import { FC } from 'react';
import { FieldErrors, FieldValues, UseFormClearErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { CustomInput } from 'components/forms/custom-input';
import { InputLabel } from 'components/forms/custom-input/custom-input.style';
import { useIsBlurWithValidation } from 'hooks/use-is-blur-with-validation';
import { ContainerInputWithLabel, HintErrorSpan } from 'pages/auth/auth.style';
import { UserAPIFields, ValidationErrors } from 'types/enum';

export const InputName: FC<{
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
  name: UserAPIFields;
  placeholder: string;
}> = ({ register, watch, errors, clearErrors, name, placeholder }) => {
  const { setIsBlur, isEmptyBluredLabel } = useIsBlurWithValidation(name, watch, errors);

  return (
    <ContainerInputWithLabel>
      <CustomInput
        required={true}
        register={register}
        watch={watch}
        errors={errors}
        setIsBlur={setIsBlur}
        clearErrors={clearErrors}
        name={name}
        placeholder={placeholder}
        type='text'
      />
      <InputLabel data-test-id='hint' isError={isEmptyBluredLabel}>
        {isEmptyBluredLabel && <HintErrorSpan isError={true}>{ValidationErrors.emptyField}</HintErrorSpan>}
      </InputLabel>
    </ContainerInputWithLabel>
  );
};
