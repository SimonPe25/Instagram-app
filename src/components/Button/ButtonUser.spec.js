import Button from './ButtonUser.jsx';
import { render} from '@testing-library/react'



describe('Button component', () => {
 
    it('should render correctly', () => {
        const { getByRole } = render(<Button />)
        getByRole('button')
    })
    it('snapshot', () => {
        const { getByRole } = render(<Button>Decrement</Button>);
        expect(getByRole('button')).toMatchSnapshot()
    })
    
    it('should add class with type', () => {
            const type = 'primary';
            const { queryByRole } = render(<Button type={type}>Increment</Button>)
            const button = queryByRole('button')
            expect(button.className).toEqual(expect.stringContaining('btn btn-primary'))
        })
 
})