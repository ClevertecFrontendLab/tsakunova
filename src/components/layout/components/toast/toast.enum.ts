export enum ToastMessages {
  mainError = 'Что-то пошло не так. Обновите страницу через некоторое время.',
}
export enum ToastType {
  positive = 'positive',
  negative = 'negative',
}

export type AppToast = {
  toastType: ToastType;
  toastMessage: string;
};
