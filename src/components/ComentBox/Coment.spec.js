import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'
import ComentBox from './ComentBox.jsx'


let container;
describe('Testing ComentBox', () => {
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })
  afterEach(() => {
    unmountComponentAtNode(container)
    container = null
  })
  test('Smoke test ComentBox', () => {
    act(() => {
      render(<ComentBox/>, container)
    })
  })
})








