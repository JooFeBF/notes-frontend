import AllNotes from './notes'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('AllNotes', () => {
  test('renders without problem', () => {
    const note = [{
      title: 'this is a test',
      content: 'test',
      id: '1'
    }]
    const component = render(<AllNotes notes={note}/>)
    component.getByText('this is a test')
    component.getByText('test')
  })
})
