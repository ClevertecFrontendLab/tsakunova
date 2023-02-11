import { IconFacebook, IconInstagram, IconLinkedin, IconVK } from 'assets/icons';
import { BookCategory, RouteNames, RouteTestId } from 'types/enum';
import { NavMenuType } from 'types/types';

export const DEFAULT_WIDTH = 1440;

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
      items: [
        {
          name: 'Бизнес-книги',
          category: BookCategory.business,
          count: 14,
        },
        {
          name: 'Детективы',
          category: BookCategory.detective,
          count: 8,
        },
        {
          name: 'Детские книги',
          category: BookCategory.kids,
          count: 14,
        },
        {
          name: 'Зарубежная литература',
          category: BookCategory.foreign,
          count: 2,
        },
        {
          name: 'История',
          category: BookCategory.history,
          count: 5,
        },
        {
          name: 'Классическая литература',
          category: BookCategory.classic,
          count: 12,
        },
        {
          name: 'Книги по психологии',
          category: BookCategory.psy,
          count: 11,
        },
        {
          name: 'Компьютерная литература',
          category: BookCategory.computer,
          count: 54,
        },
        {
          name: 'Культура и искусство',
          category: BookCategory.art,
          count: 5,
        },
        {
          name: 'Наука и образование',
          category: BookCategory.science,
          count: 2,
        },
        {
          name: 'Публицистическая литература',
          category: BookCategory.public,
          count: 0,
        },
        {
          name: 'Справочники',
          category: BookCategory.handbook,
          count: 10,
        },
        {
          name: 'Фантастика',
          category: BookCategory.fantasy,
          count: 12,
        },
        {
          name: 'Юмористическая литература',
          category: BookCategory.humor,
          count: 8,
        },
      ],
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
