import React, { FC } from 'react';
import { HighlightMatches } from 'components/highlight-matches';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { addComma } from 'utils/add-comma';
import { keyExtractor } from 'utils/key-extractor';

type AboutProps = {
  authors?: string[];
  title: string;
};

export const MainAboutBlock: FC<AboutProps> = ({ authors = [], title }) => {
  const searchValue = useTypedSelector(({ utils }) => utils.searchString);
  const addLight = (str: string) => <HighlightMatches filter={searchValue} text={str} />;

  return (
    <React.Fragment>
      <h5>{addLight(title)}</h5>
      <p>
        {authors?.map((author, index) => (
          <span key={keyExtractor(index)}>
            {author}
            {addComma(index, authors.length)}
          </span>
        ))}
      </p>
    </React.Fragment>
  );
};
