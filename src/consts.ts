import { IconFacebook, IconInstagram, IconLinkedin, IconVK } from 'assets/icons';
import { RouteNames, RouteTestId } from 'types/enum';
import { NavMenuType } from 'types/types';

export const DEFAULT_WIDTH = 1440;

export const BASE_IMAGES_URL = 'https://strapi.cleverland.by';

export const sizes = {
  tablet: 650,
  laptop: 1120,
  max: 1440,
};

export const devices = {
  mobile: `(max-width: ${sizes.tablet}px)`,
  tablet: `(max-width: ${sizes.laptop}px)`,
  laptop: `(max-width: ${sizes.max}px)`,
};

export const NAVIGATION_MENU_LIST: NavMenuType[] = [
  {
    title: 'Витрина книг',
    route: RouteNames.books,
    isOnlyBurger: false,
    testId: RouteTestId.books,
    list: {
      testId: RouteTestId.all,
      route: RouteNames.booksAll,
      listTitle: 'Все книги',
      items: [],
    },
  },
  {
    title: 'Правила пользования',
    isOnlyBurger: false,
    route: RouteNames.terms,
    testId: RouteTestId.terms,
  },
  {
    title: 'Договор оферты',
    isOnlyBurger: false,
    route: RouteNames.contract,
    testId: RouteTestId.contract,
  },
  {
    title: 'Профиль',
    isOnlyBurger: true,
    route: RouteNames.profile,
    testId: RouteTestId.profile,
  },
  {
    title: 'Выход',
    isOnlyBurger: true,
    route: RouteNames.signOut,
    testId: RouteTestId.signOut,
  },
];

export const SOCIAL_LINKS = [
  {
    src: 'https://www.facebook.com/clevertec.ru',
    icon: IconFacebook,
  },
  {
    src: 'https://www.instagram.com/clevertec.ru/',
    icon: IconInstagram,
  },
  {
    src: 'https://vk.com/clevertec',
    icon: IconVK,
  },
  {
    src: 'https://www.linkedin.com/company/clevertec-ru',
    icon: IconLinkedin,
  },
];

export const PROFILE_SECTION_TITLES = {
  credentials: {
    title: 'Учётные данные',
    subtitle: 'Здесь вы можете отредактировать информацию о себе',
  },
  contract: {
    title: 'Договор',
    subtitle: 'Здесь вы можете просмотрить данные о договоре, а так же внести оплату',
  },
  history: {
    title: 'История',
    subtitle: 'Список прочитанных книг',
  },
  reserved: {
    title: 'Забронированная книга',
    subtitle: 'Здесь вы можете просмотреть забронированную книгу, а так же отменить бронь',
  },
  taken: {
    title: 'Книга которую взяли',
    subtitle: 'Здесь можете просмотреть информацию о книге и узнать сроки возврата',
  },
};

export const COPYRIGHT_TEXT = '© 2020-2023 Cleverland. Все права защищены.';

export const Regex = {
  login: /^[a-zA-Z][a-zA-Z0-9-_.]{1,20}$/,
  password: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!]{6,}/g,
  passwordUpperLetter: /(?=.*[A-Z])/,
  passwordMinOneNum: /(?=.*[0-9])/,
  loginLetter: /(?=.*[a-zA-Z]).{1,}/,
  loginNumber: /(?=.*\d).{1,}/,
  minEightSymbol: /[0-9a-zA-Z]{8,}/,
  phone:
    /^\+?375((\s\(33\)\s\d{3}-\d{2}-\d{2})|(\s\(29\)\s\d{3}-\d{2}-\d{2})|(\s\(44\)\s\d{3}-\d{2}-\d{2})|(\s\(25\)\s\d{3}-\d{2}-\d{2}))\s*$/,
  email:
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
};
