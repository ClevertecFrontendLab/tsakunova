import { ButtonType, TitleVariant } from 'types/enum';

import { getDateString } from './time.utils';

const getDateOff = (bookedTill: string) => {
  const date = new Date(bookedTill);

  return `${getDateString(date.getDate(), true)}.${getDateString(date.getMonth())}`;
};

export const getButtonStyles = (isBooked?: boolean, bookedTill?: string) => {
  const buttonType = isBooked ? ButtonType.secondaryButton : ButtonType.primaryButton;

  const buttonTitle = isBooked
    ? bookedTill
      ? `${TitleVariant.busy} ${getDateOff(bookedTill)}`
      : TitleVariant.booked
    : TitleVariant.booking;

  return {
    buttonType,
    buttonTitle,
  };
};
