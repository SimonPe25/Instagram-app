import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'
import Form from './Form'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../store/rootReducer';
import { BrowserRouter } from 'react-router-dom';

let store = createStore(rootReducer, {
    cards: [],
    message: []
  })
let container;
describe('Testing Form', () => {
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })
  afterEach(() => {
    unmountComponentAtNode(container)
    container = null
  })
  test('Smoke test Form', () => {
    act(() => {
      render(<Provider store={store}><BrowserRouter><Form/></BrowserRouter></Provider>, container)
    })
  })
  test('Should Form render with props', () => {
    const somesText = "Опубликовать"
   act(() => {
     render( <Provider store={store}><BrowserRouter><Form 
        textName={somesText}
        
     /> </BrowserRouter></Provider>, container)
   })
   
   const nameButtonContent = document.getElementById('testButtonForm').textContent 

   expect(nameButtonContent).toBe(somesText)
  
 })

})




