import AllNotes from './notes'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('<Toggleable/ >', () => {
  test('renders without problem', () => {
    const note = [{
      title: 'this is a text',
      content: 'test',
      id: '1'
    }]
    const component = render(<AllNotes notes={note}/>)
    component.getByText('this is a text')
    component.getByText('test')
  })
})
