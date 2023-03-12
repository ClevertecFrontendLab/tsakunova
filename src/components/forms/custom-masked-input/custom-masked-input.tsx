import { FC } from 'react';
import { Control, Controller, FieldErrors, FieldValues, UseFormWatch } from 'react-hook-form';
import MaskedInput from 'react-text-mask';
import { FORM_INPUT_TEXT, registerStepThreeValidation } from 'pages/auth/const';
import { UserAPIFields, ValidationErrors } from 'types/enum';

import {
  InputContainer,
  InputLabel,
  InputLine,
  InputWithDynamicalLabel,
  LabelIntroInput,
} from './custom-masked-input.style';

type CustomInputProps = {
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>;
};

const inputStyles = { backgroundColor: 'transparent', border: 'none', outline: 'none' };

export const CustomMaskedInput: FC<CustomInputProps> = ({ watch, errors, control }) => {
  const watchField = watch(UserAPIFields.phone);

  return (
    <div>
      <InputContainer isIntroLabel={!!watchField}>
        <InputWithDynamicalLabel>
          {watchField && <LabelIntroInput>{FORM_INPUT_TEXT.regPhone.placeholder}</LabelIntroInput>}
          <Controller
            control={control}
            name={UserAPIFields.phone}
            rules={{
              required: true,
              validate: registerStepThreeValidation.phone,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <MaskedInput
                name={UserAPIFields.phone}
                mask={[
                  '+',
                  '3',
                  '7',
                  '5',
                  ' ',
                  '(',
                  /2|4|3/,
                  /9|5|4|3/,
                  ')',
                  ' ',
                  /\d/,
                  /\d/,
                  /\d/,
                  '-',
                  /\d/,
                  /\d/,
                  '-',
                  /\d/,
                  /\d/,
                ]}
                value={value}
                style={inputStyles}
                keepCharPositions={true}
                placeholder={FORM_INPUT_TEXT.regPhone.placeholder}
                placeholderChar='x'
                onChange={onChange}
                onBlur={onBlur}
                required={true}
              />
            )}
          />
        </InputWithDynamicalLabel>
      </InputContainer>
      <InputLine isError={!!errors[UserAPIFields.phone]} />
      <InputLabel data-test-id='hint' isError={!!errors[UserAPIFields.phone]}>
        {errors[UserAPIFields.phone]?.type === 'required'
          ? ValidationErrors.emptyField
          : FORM_INPUT_TEXT.regPhone.label}
      </InputLabel>
    </div>
  );
};
