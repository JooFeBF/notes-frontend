import Toggleable from './toggleable'
import { render, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'

describe('<Toggleable/ >', () => {
  let component
  const buttonLabel = 'Open'

  beforeEach(() => {
    component = render(<Toggleable buttonLabel={buttonLabel}>
      <div>
        Im a valid children
      </div>
    </Toggleable>)
  })

  test('renders without problem', () => {
    component.getByText(buttonLabel)
    component.getByText('Im a valid children')
  })

  test('Clicking the open button shows the children content', () => {
    const button = component.getByText(buttonLabel)
    const closeButton = component.getByText('Cancel')
    const children = component.getByText('Im a valid children')

    expect(closeButton).toHaveStyle({ display: 'none' })

    fireEvent.click(button)

    expect(children.parentNode).not.toHaveStyle({ display: 'none' })
    expect(closeButton).not.toHaveStyle({ display: 'none' })
  })
})
