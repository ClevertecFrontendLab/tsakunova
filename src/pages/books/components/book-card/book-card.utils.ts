import { ViewVariant } from 'types/enum';

import { ListBookImage, ListContent, ListViewCard } from './book-card-list.style';
import { WindowBookImage, WindowContent, WindowViewCard } from './book-card-window.style';

export const getStyledComponentForBookCard = (view: ViewVariant) =>
  view === ViewVariant.window
    ? { card: WindowViewCard, content: WindowContent, image: WindowBookImage }
    : { card: ListViewCard, content: ListContent, image: ListBookImage };
