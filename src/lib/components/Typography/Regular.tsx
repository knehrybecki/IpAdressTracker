import styled from 'styled-components'

export const Regular = styled.div`
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: ${({ theme }) => theme.typography.colors.regular};
`
