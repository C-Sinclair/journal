import { useEffect, useRef, useState } from "react"

export function useEditable<
  E extends HTMLElement = HTMLDivElement
>() {
  const ref = useRef<E>(null)

  const [editing, setEditing] = useState(false)
 
  useEffect(() => {
    const clickaway = ({ target }: MouseEvent) => {
      if (ref && !ref.current?.contains(target as Node)) {
        setEditing(false)
      }
    }
    if (editing) {
      document.addEventListener('click', clickaway)
      return () => {
        document.removeEventListener('click', clickaway)
      }
    }
  }, [editing])

  return {
    ref,
    editing,
    setEditing
  }
}