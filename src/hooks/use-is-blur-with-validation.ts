import { useState } from 'react';
import { FieldErrors, FieldValues, UseFormWatch } from 'react-hook-form';
import { UserAPIFields } from 'types/enum';

export const useIsBlurWithValidation = (
  name: UserAPIFields,
  watch: UseFormWatch<FieldValues>,
  errors: FieldErrors<FieldValues>
) => {
  const watchField = watch(name);
  const [isBlur, setIsBlur] = useState(false);

  const isEmptyValue = !watchField;

  const isEmptyBluredLabel = (isBlur && isEmptyValue) || (isBlur && !!errors[name]);

  return { isBlur, setIsBlur, isEmptyBluredLabel, watchField };
};
