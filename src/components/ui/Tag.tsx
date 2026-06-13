interface Props {
  label: string
}

export function Tag({ label }: Props) {
  return (
    <span className="border border-primary text-primary text-xs px-2 py-0.5 font-medium">
      {label}
    </span>
  )
}
