import { FC, ReactNode, useState } from 'react';
import { DownSVG, UpSVG } from 'assets/icons';
import { SeparationLine } from 'index.style';

import { TitleBookSection } from './book-section-layout.style';

type LayoutProps = {
  title: string;
  details?: number;
  withSeparator?: boolean;
  children: ReactNode;
  isPadding?: boolean;
  withArrow?: boolean;
};

export const BookSectionLayout: FC<LayoutProps> = ({
  title,
  details,
  withSeparator = true,
  children,
  isPadding = false,
  withArrow = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const Arrow = isOpen ? UpSVG : DownSVG;

  const expandSection = () => withArrow && setIsOpen(!isOpen);

  return (
    <div>
      <TitleBookSection isPadding={isPadding} onClick={expandSection} data-test-id={withArrow && 'button-hide-reviews'}>
        {title} <span>{details}</span> {withArrow && <Arrow />}
      </TitleBookSection>
      {withSeparator && <SeparationLine />}
      {isOpen && children}
    </div>
  );
};
