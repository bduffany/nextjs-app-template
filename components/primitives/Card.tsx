import { Spacing } from 'components/defs';
import styled, { css } from 'styled-components';

export interface CardProps {
  space?: Spacing;
}

const Card = styled.div<CardProps>`
  ${({ space = 'gutter' }) => css`
    padding: ${'var(--' + space + ')'};
  `}
`;

export default Card;
