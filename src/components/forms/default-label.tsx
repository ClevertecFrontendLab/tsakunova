import { FC } from 'react';
import { HintErrorSpan } from 'pages/auth/auth.style';
import { ValidationErrors } from 'types/enum';

export const DefaultLabel: FC<{ isEmptyBluredLabel: boolean; label: string }> = ({ isEmptyBluredLabel, label }) =>
  isEmptyBluredLabel ? (
    <HintErrorSpan isError={true}>{ValidationErrors.emptyField}</HintErrorSpan>
  ) : (
    <HintErrorSpan isError={false}>{label}</HintErrorSpan>
  );
