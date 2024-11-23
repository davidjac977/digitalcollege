interface ButtonProps {
    title: string
    variant?: string
}

export function Button(props: ButtonProps) {
    const danger = 'bg-red-500'
    const success = 'bg-emerald-500'
    const primary = 'bg-blue-500'
  
    const style = props.variant === 'danger'
      ? danger
      : props.variant === 'success'
        ? success
        : primary
  
    return (
      <button className={`px-4 py-2 rounded ${style}`}>
        {props.title}
      </button>
    )
  }