import styled from 'styled-components'

export const SubTitle = styled.div`
  font-family: 'Rubik', sans-serif;
  font-size: 8px;
  letter-spacing: 1.5px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.SUBTEXT_TITLE};
  line-height: 2.5;

  @media (min-width: ${({ theme }) => theme.media.sm}px) {
    line-height: 3;
  }
`
