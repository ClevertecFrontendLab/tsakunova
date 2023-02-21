import { FC } from 'react';
import { LoaderSVG } from 'assets/icons';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { selectLoading } from 'store/selectors/loading-selector';

import { Container } from './loader.style';

export const Loader: FC = () => {
  const isLoading = useTypedSelector(selectLoading);

  return (
    <Container isLoading={isLoading} data-test-id='loader'>
      <div>
        <LoaderSVG />
      </div>
    </Container>
  );
};
