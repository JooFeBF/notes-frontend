import { useState, forwardRef, useImperativeHandle } from 'react'

const Toggleable = forwardRef(({ children, buttonLabel = 'Open' }, ref) => {
  Toggleable.displayName = 'Toggleable'
  const [visible, setVisible] = useState(false)

  const showWhenIsVisible = () => {
    return visible ? { display: '' } : { display: 'none' }
  }

  const hideWhenIsVisible = () => {
    return visible ? { display: 'none' } : { display: '' }
  }

  const handleToggleVisibility = () => {
    setVisible(visibility => !visibility)
  }

  useImperativeHandle(ref, () => { return { handleToggleVisibility } })

  return (
    <div>
      <div style={showWhenIsVisible()}>
        {children}
      </div>
      <button onClick={handleToggleVisibility} style={hideWhenIsVisible()}>
        {buttonLabel}
      </button>
      <button onClick={handleToggleVisibility} style={showWhenIsVisible()}>
        Cancel
      </button>
    </div>
  )
})

export default Toggleable
