import { RouteNames, RouteTestId } from './enum';

export type UserDTO = {
  name: string;
  avatarLink?: string;
};

export type ResetPasswordData = {
  password: string;
  passwordConfirmation: string;
  code: string;
};

export type RegistrationUserData = {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export type UserAPI = {
  jwt: string;
  id: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  avatarLink?: string;
};

export type NavMenuItemList = {
  listTitle: string;
  testId: RouteTestId;
  route: RouteNames;
  items: CategoriesDTO[];
};

export type NavMenuType = {
  route: RouteNames;
  isOnlyBurger: boolean;
  title: string;
  testId: RouteTestId;
  list?: NavMenuItemList;
};

export type CategoriesDTO = {
  name: string;
  id: number;
  path: string;
  count?: number;
};

export type ImagesType = {
  url: string;
};

export type MainBookDTO = {
  issueYear?: number;
  rating?: number;
  title: string;
  authors?: string[];
  image?: ImagesType;
  categories?: string[];
  id: number;
  booking?: {
    id: number;
    order: boolean;
    dateOrder?: string;
    customerId?: number;
    customerFirstName?: string;
    customerLastName?: string;
  };
  delivery?: {
    id: number;
    handed: boolean;
    dateHandedFrom?: string;
    dateHandedTo?: string;
    recipientId?: number;
    recipientFirstName?: string;
    recipientLastName?: string;
  };
  histories?: Array<{
    id?: number;
    userId?: number;
  }>;
};

export type FullBookDTO = {
  id: number;
  categories: string[];
  title: string;
  images: ImagesType[];
  authors: string[];
  description: string;
  rating: number;
  publish?: string;
  issueYear?: number;
  pages?: number;
  cover?: string;
  format?: string;
  weight?: string;
  ISBN?: string;
  producer?: string;
  comments: CommentDTO[];
  booking?: {
    id: number;
    order: boolean;
    dateOrder?: string;
    customerId?: number;
    customerFirstName?: string;
    customerLastName?: string;
  };
  delivery?: {
    id: number;
    handed: boolean;
    dateHandedFrom?: string;
    dateHandedTo?: string;
    recipientId?: number;
    recipientFirstName?: string;
    recipientLastName?: string;
  };
  histories?: Array<{
    id?: number;
    userId?: number;
  }>;
};

export type CommentDTO = {
  id: number;
  rating: number;
  text?: string;
  createdAt: string;
  user: {
    commentUserId: number;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
  };
};

export type StyledEndpoints = {
  tablet?: string;
  mobile?: string;
  laptop?: string;
};
