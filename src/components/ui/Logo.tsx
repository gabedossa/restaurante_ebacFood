import styled, { css } from 'styled-components'

interface Props {
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: css`font-size: 16px; padding: 6px 12px;`,
  md: css`font-size: 20px; padding: 8px 16px;`,
  lg: css`font-size: 24px; padding: 10px 20px;`,
}

const LogoWrapper = styled.span<{ $size: 'sm' | 'md' | 'lg' }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 900;
  letter-spacing: 0.05em;
  line-height: 1;
  ${({ $size }) => sizes[$size]}
`

export function Logo({ size = 'md' }: Props) {
  return (
    <LogoWrapper $size={size}>
      efood
      <svg width="14" height="20" viewBox="0 0 14 20" fill="currentColor" aria-hidden="true">
        <path d="M1 1v6a3 3 0 0 0 3 3v9h2v-9a3 3 0 0 0 3-3V1H8v5H6V1H4v5H2V1H1zm10 0v18h2V11h1a1 1 0 0 0 1-1V4a3 3 0 0 0-3-3h-1z" />
      </svg>
    </LogoWrapper>
  )
}
