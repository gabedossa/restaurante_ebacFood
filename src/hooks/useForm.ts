import { useState } from 'react'
import type { ChangeEvent } from 'react'

export function useForm<T>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function reset() {
    setValues(initialValues)
  }

  return { values, handleChange, reset }
}
