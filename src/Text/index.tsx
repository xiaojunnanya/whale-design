import React, { memo } from 'react'
import type { FC } from 'react'

interface TextProps {
    children?: React.ReactNode;
}

const index:FC<TextProps> = memo((props) => {

    const { children } = props
    
    return (
        <div>{ children }</div>
    )
})

export default index