import React, { memo } from 'react'
import type { FC } from 'react'

interface ButtonProps {
    children?: React.ReactNode;
}

const index:FC<ButtonProps> = memo((props) => {

    const { children } = props
    
    return (
        <button>{ children }</button>
    )
})

export default index