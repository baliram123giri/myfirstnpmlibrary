import * as React from 'react'

const Button = ({ children }: { children: React.ReactNode }) => {
    return (
        <button>{children}</button>
    )
}

export { Button }