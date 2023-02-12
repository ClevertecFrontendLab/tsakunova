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
