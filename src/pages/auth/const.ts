import { UserAPIFields } from 'types/enum';

export const REGISTRATION_STEPS_COUNT = 3;

export const FORM_INPUT_TEXT = {
  regLogin: {
    label: 'Используйте для логина латинский алфавит и цифры',
    placeholder: 'Придумайте логин для входа',
  },
  regPass: {
    label: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
    placeholder: 'Пароль',
  },
  regName: {
    placeholder: 'Имя',
    label: 'Поле не может быть пустым',
  },
  regSurname: {
    placeholder: 'Фамилия',
    label: 'Поле не может быть пустым',
  },
  regPhone: {
    placeholder: 'Номер телефона',
    label: 'В формате +375 (xx) xxx-xx-xx',
  },
  regEmail: {
    placeholder: 'E-mail',
    label: 'Введите корректный e-mail',
  },
  authLogin: {
    placeholder: 'Логин',
  },
  authPassword: {
    placeholder: 'Пароль',
  },
  forgotPassword: {
    placeholder: 'Email',
    label: 'На это email  будет отправлено письмо с инструкциями по восстановлению пароля',
  },

  forgotAddNewPassword: {
    placeholder: 'Новый пароль',
    label: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
  },
  forgotAddNewPasswordRepeat: {
    placeholder: 'Повторите пароль',
  },
};

export const PHONE_MASK = [
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
];

export const registerStepOneValidation = {
  [UserAPIFields.username]: {
    isStringValue: (value: string) => /(?=.*[A-Za-z]).{1,}/.test(value),
    isNumberValue: (value: string) => /(?=.*\d).{1,}/.test(value),
  },
  [UserAPIFields.password]: {
    isLengthValue: (value: string) => /[A-Za-z0-9]{8,}/.test(value),
    isUpperCaseValue: (value: string) => /(?=.*[A-Z])/.test(value),
    isNumberValue: (value: string) => /(?=.*[0-9])/.test(value),
  },
};

export const registerStepThreeValidation = {
  [UserAPIFields.phone]: {
    isValidValue: (value: string) =>
      /^\+?375((\s\(33\)\s\d{3}-\d{2}-\d{2})|(\s\(29\)\s\d{3}-\d{2}-\d{2})|(\s\(44\)\s\d{3}-\d{2}-\d{2})|(\s\(25\)\s\d{3}-\d{2}-\d{2}))\s*$/.test(
        value
      ),
  },
  [UserAPIFields.email]: {
    isValidEmail: (value: string) =>
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(
        value
      ),
  },
};
