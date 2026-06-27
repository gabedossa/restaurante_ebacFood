import styled, { css } from 'styled-components'
import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  fullWidth?: boolean
}

const variants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.bgPeach};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryDark};
      border-color: ${({ theme }) => theme.colors.primaryDark};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.bgPeach};
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.bgPeach};
    &:hover {
      opacity: 0.9;
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.bgPeach};
    }
  `,
}

const StyledButton = styled.button<{ $variant: 'primary' | 'secondary' | 'outline'; $fullWidth?: boolean }>`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 0;
  text-align: center;
  display: inline-block;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  &:disabled {
    opacity: 0.5;
  }
  ${({ $variant }) => variants[$variant]}
`

export function Button({ variant = 'primary', fullWidth, children, ...rest }: Props) {
  return (
    <StyledButton $variant={variant} $fullWidth={fullWidth} {...rest}>
      {children}
    </StyledButton>
  )
}
