import { ToastNegativeSVG, ToastPositiveSVG } from 'assets/icons';

import { ToastType } from './toast.enum';
import { NegativeToast, PositiveToast } from './toast.style';

export const getToastStyles = (toastType: ToastType = ToastType.negative) => {
  if (toastType === ToastType.negative)
    return {
      styledComponent: NegativeToast,
      icon: ToastNegativeSVG,
    };

  return {
    styledComponent: PositiveToast,
    icon: ToastPositiveSVG,
  };
};
