import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../store/rootReducer.jsx';
import Modal from './Modal.jsx'
let container;
describe('Testing Modal.js', () => {
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })
  afterEach(() => {
    unmountComponentAtNode(container)
    container = null
  })
  test('Smoke test Modal.js', () => {
    act(() => {
      render(<Provider store={store}><Modal/></Provider>, container)
    })
  })

  let store = createStore(rootReducer, {
    cards: [],
    message: []
  })
  test('Should be name and text value in Modal.js', () => {
     const testName = "Some name"
     const testtext = "Add to cart"

    act(() => {
      render(<Provider store={store}> <Modal name={testName} country={testtext} /></Provider>, container)
    })
    const nameContent = document.getElementById('name').textContent
    const textContent = document.getElementById('country').textContent
    expect(nameContent).toBe(testName)
    expect(textContent).toBe(testtext)
    
  })
})