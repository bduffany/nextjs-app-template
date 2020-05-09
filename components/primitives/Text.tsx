import styled, { css } from 'styled-components';

export interface TextProps {
  align?: 'left' | 'right' | 'center';
}

const Text = styled.div<TextProps>`
  ${({ align = 'left' }) =>
    css`
      text-align: ${align};
    `}
`;

export default Text;
