import { FC, useState } from 'react';
import { FieldErrors, FieldValues, UseFormClearErrors, UseFormRegister, UseFormWatch, Validate } from 'react-hook-form';
import { Checkmark, EyeClosed, EyeOpen } from 'assets/icons';

import {
  EyeToggler,
  IconsContainer,
  InputContainer,
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
  required: boolean;
  validation?: Validate<string, FieldValues> | Record<string, Validate<string, FieldValues>>;
  type: string;
  clearErrors: UseFormClearErrors<FieldValues>;
  setIsBlur?: (value: boolean) => void;
  withCheckmark?: boolean;
};

export const CustomInput: FC<CustomInputProps> = ({
  register,
  watch,
  errors,
  name,
  required,
  placeholder,
  validation,
  type,
  clearErrors,
  setIsBlur = () => null,
  withCheckmark = true,
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

          <TextInput
            {...register(`${name}`, { required, validate: { ...validation } })}
            type={inputType}
            placeholder={placeholder}
            onBlur={() => {
              setIsBlur(true);
            }}
            onFocus={() => {
              clearErrors(name);
              setIsBlur(false);
            }}
          />
        </InputWithDynamicalLabel>
        {isPassword && watchField[name] && (
          <IconsContainer>
            {!errors[name] && withCheckmark && <Checkmark data-test-id='checkmark' />}
            <EyeToggler type='button' onClick={tooglePassVisibility}>
              {isVisiblePassword ? <EyeOpen data-test-id='eye-opened' /> : <EyeClosed data-test-id='eye-closed' />}
            </EyeToggler>
          </IconsContainer>
        )}
      </InputContainer>
      <InputLine isError={!!errors[name]} />
    </div>
  );
};
