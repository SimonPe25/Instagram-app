import React, {memo} from 'react'

const Button = ({ onClick, type, children }) => {
    return (
        <button 
        data-testid="button-attr" 
        className={`button  ${type ? 'button--' + type : ''}`} 
        onClick={onClick} >
            {children}
        </button>
    )
}

export default memo(Button)
