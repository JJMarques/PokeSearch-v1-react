import React from 'react'
import spinner from '../../img/spinner.gif'

const Loading = () => {
    return (
        <img src={spinner} style={{ width: '100px', marginTop: '20px', display: 'flex', justifyContent: 'center', opacity: '0.4' }} alt='Loading' />
    )
}

export default Loading