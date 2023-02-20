import { AppToast } from 'components/layout/components/toast/toast.enum';

export type UtilsState = {
  toast: AppToast | null;
  isDescendingSort: boolean;
  searchString: string;
};
