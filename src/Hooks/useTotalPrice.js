import React from 'react'

function useTotalPrice(props) {

    let sumPrice = 0
    props.map(item => {
        sumPrice += item.price
    })
    return [sumPrice]

}

export default useTotalPrice