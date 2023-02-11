import { ButtonType, TitleVariant } from 'types/enum';

import { getDateString } from './time.utils';

export const getButtonStyles = (isBooked: boolean, bookedTill: string) => {
  const buttonType = isBooked ? ButtonType.secondaryButton : ButtonType.primaryButton;
  const date = new Date(bookedTill);
  const dateOff = `${getDateString(date.getDate(), true)}.${getDateString(date.getMonth())}`;
  const buttonTitle = isBooked
    ? bookedTill
      ? `${TitleVariant.busy} ${dateOff}`
      : TitleVariant.booked
    : TitleVariant.booking;

  return {
    buttonType,
    buttonTitle,
  };
};
