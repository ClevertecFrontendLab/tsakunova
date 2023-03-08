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
};
