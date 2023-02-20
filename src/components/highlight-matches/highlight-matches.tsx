import { FC, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { keyExtractor } from 'utils/key-extractor';

const HightLight = styled.span`
  color: ${(props) => props.theme.color.main.accent};
`;

type HighlightProps = {
  filter: string;
  text: string;
};

export const HighlightMatches: FC<HighlightProps> = ({ filter, text }) => {
  const regExp = useMemo(() => new RegExp(filter, 'ig'), [filter]);
  const matchValue = text.match(regExp);
  const lightness = useCallback(() => {
    if (matchValue) {
      return text.split(regExp).map((before, index, arr) => {
        if (index < arr.length - 1) {
          const selectedText = matchValue.shift();

          return (
            <span key={keyExtractor(index)}>
              {before}
              <HightLight data-test-id='highlight-matches'>{selectedText}</HightLight>
            </span>
          );
        }

        return <span>{before}</span>;
      });
    }

    return null;
  }, [matchValue, regExp, text]);

  if (!filter) return <span>{text}</span>;

  return <span>{lightness()}</span>;
};
