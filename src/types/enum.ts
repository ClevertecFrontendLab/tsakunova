export enum ButtonType {
  primaryButton = 'primaryButton',
  secondaryButton = 'secondaryButton',
}
export enum FormButtonType {
  button = 'button',
  submit = 'submit',
}

export enum UserAPIFields {
  email = 'email',
  username = 'username',
  password = 'password',
  repeatPassword = 'passwordConfirmation',
  firstName = 'firstName',
  lastName = 'lastName',
  phone = 'phone',
  identifier = 'identifier',
}

export enum TitleVariant {
  profile = 'Профиль',
  exit = 'Выход',
  loginAfterRegistration = 'вход',
  repeat = 'повторить',
  repeatRegistration = 'назад к регистрации',
  loginErrorTitle = 'Вход не выполнен',
  loginErrorText = 'Что-то пошло не так. Попробуйте ещё раз',
  regSuccessTitle = 'Регистрация успешна',
  regSuccessText = 'Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль',
  regErrorTitle = 'Данные не сохранились',
  regErrorMessage = 'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз',
  regNotUniqueErrorText = 'Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail',
  forgotTitle = 'Восстановление пароля',
  emailSentTitle = 'Письмо выслано',
  emailSentText = 'Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля',
  newPassSuccessText = 'Зайдите в личный кабинет, используя свои логин и новый пароль',
  newPassButton = 'сохранить изменения',
  newPassSuccessTitle = 'Новые данные сохранены',
  hasProfile = 'Есть учётная запись?',
  loginTitle = 'Bход в личный кабинет',
  forgot = 'Забыли логин или пароль?',
  haveNotProfile = 'Нет учётной записи?',
  notTrueLogin = 'Неверный логин или пароль!',
  recovery = 'Восстановить',
  login = 'войти',
  nextStep = 'следующий шаг',
  lastStep = 'последний шаг',
  registrationButton = 'зарегистрироваться',
  cleverland = 'Cleverland',
  registration = 'Регистрация',
  booking = 'Забронировать',
  busy = 'Занята до',
  booked = 'Забронирована',
  rating = 'По рейтингу',
  searchPlaceholder = 'Поиск книги или автора…',
  notRating = 'ещё нет оценок',
  addRating = 'оценить книгу',
  emptyCategory = 'В этой категории книг ещё нет',
  emptySearch = 'По запросу ничего не найдено',
}

export enum ViewVariant {
  list = 'listView',
  window = 'windowView',
  sortUp = 'sortUp',
  sortDown = 'sortDown',
  search = 'search',
}

export enum RouteNames {
  login = 'login',
  books = 'books',
  contract = 'contract',
  terms = 'terms',
  booksAll = 'all',
  profile = 'profile',
  signOut = 'signOut',
  auth = 'auth',
  registration = 'registration',
  forgotPass = 'forgot-pass',
}

export enum RouteTestId {
  books = 'showcase',
  contract = 'contract',
  terms = 'terms',
  all = 'books',
  profile = 'profile',
  signOut = 'signOut',
}

export enum TestIdType {
  burger = 'burger',
  navigation = 'navigation',
}

export enum BookSectionTitle {
  about = 'О книге',
  rating = 'Рейтинг',
  comments = 'Отзывы',
  fullInfo = 'Подробная информация',
}

export enum BookInfoTitles {
  producer = 'Изготовитель',
  publishingYear = 'Год издания',
  cover = 'Переплёт',
  format = 'Формат',
  genre = 'Жанр',
  weight = 'Вес',
  ISBN = 'ISBN',
  pages = 'Страниц',
  restrictions = 'Возрастные ограничения',
  publishingOffice = 'Издательство',
}
export enum BookCategory {
  all = 'Все книги',
  business = 'Бизнес',
  detective = 'Детективы',
  childish = 'Детские',
  foreign = 'foreign',
  history = 'История',
  fiction = 'Художественная литература',
  psychology = 'Психология',
  parents = 'Родителям',
  'non-fiction' = 'Нон-фикшн',
  programming = 'Программирование',
  hobby = 'Хобби',
  design = 'Дизайн',
  art = 'Искусство',
  science = 'Наука',
  public = 'public',
  handbook = 'Справочники',
  fantasy = 'Фантастика',
  humor = 'Юмор',
}

export enum ErrorsMessages {
  nameTaken = 'Email or Username are already taken',
}

export enum ValidationErrors {
  emptyField = 'Поле не может быть пустым',
  passRepeat = 'Пароли не совпадают',
  latin = 'латинский алфавит',
  number = 'цифры',
  length = 'не менее 8 символов',
  upperCase = 'с заглавной буквой',
  passNumber = 'цифрой',
  email = 'Введите корректный e-mail',
}
