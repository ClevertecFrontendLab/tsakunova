import { FC, useState } from 'react';
import { FieldErrors, FieldValues, RegisterOptions, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { EyeClosed, EyeOpen } from 'assets/icons';

import {
  EyeToggler,
  InputContainer,
  InputLabel,
  InputLine,
  InputWithDynamicalLabel,
  LabelIntroInput,
  TextInput,
} from './custom-input.style';

type CustomInputProps = {
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  name: string;
  placeholder: string;
  label?: string;
  validation: RegisterOptions<FieldValues, string>;
  type: string;
};

export const CustomInput: FC<CustomInputProps> = ({
  register,
  watch,
  errors,
  name,
  label,
  placeholder,
  validation,
  type,
}) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const tooglePassVisibility = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };
  const watchField = watch();
  const isPassword = type === 'password';
  const passType = isVisiblePassword ? 'text' : 'password';
  const inputType = isPassword ? passType : type;

  return (
    <div>
      <InputContainer isIntroLabel={!!watchField[name]}>
        <InputWithDynamicalLabel>
          {watchField[name] && <LabelIntroInput>{placeholder}</LabelIntroInput>}
          <TextInput {...register(`${name}`, validation)} type={inputType} placeholder={placeholder} />
        </InputWithDynamicalLabel>
        {isPassword && watchField[name] && (
          <EyeToggler type='button' onClick={tooglePassVisibility}>
            {isVisiblePassword ? <EyeOpen data-test-id='eye-opened' /> : <EyeClosed data-test-id='eye-closed' />}
          </EyeToggler>
        )}
      </InputContainer>
      <InputLine isError={!!errors[name]} />
      <InputLabel data-test-id='hint' isError={!!errors[name]}>
        {label ? label : !!errors[name] && 'Поле не может быть пустым'}
      </InputLabel>
    </div>
  );
};
