import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'
import DirectUser from './DirectUser'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../store/rootReducer';
import { BrowserRouter } from 'react-router-dom';

let store = createStore(rootReducer, {
    cards: [],
    message: []
  })
let container;
describe('Testing DirectUser', () => {
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })
  afterEach(() => {
    unmountComponentAtNode(container)
    container = null
  })
  test('Smoke test DirectUser', () => {
    act(() => {
      render(<Provider store={store}><BrowserRouter><DirectUser/></BrowserRouter></Provider>, container)
    })
  })
  test('Should DirectUser render with props', () => {
    const somesName = "Some cards"
    const someUrl = "Some Url"


   act(() => {
     render( <Provider store={store}><BrowserRouter><DirectUser 
        name={somesName}
        url ={someUrl}
     /> </BrowserRouter></Provider>, container)
   })
   const nameContent = document.getElementById('testLinkDirectUser').textContent
   const nameH2Content = document.getElementById('testH2DirectUser').textContent 
  
   expect(nameContent).toBe(somesName)
   expect(nameH2Content).toBe(somesName)
  
 })


})




