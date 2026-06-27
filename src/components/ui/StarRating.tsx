import styled from 'styled-components'

interface Props {
  value: number
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.primary};
`

const Value = styled.span`
  font-size: 14px;
  font-weight: 700;
`

export function StarRating({ value }: Props) {
  return (
    <Wrapper>
      <Value>{value.toFixed(1)}</Value>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="#E66767">
        <path d="M7 0l1.796 5.528H14L9.102 8.944 10.898 14.472 7 11.056 3.102 14.472l1.796-5.528L0 5.528h5.204z" />
      </svg>
    </Wrapper>
  )
}
