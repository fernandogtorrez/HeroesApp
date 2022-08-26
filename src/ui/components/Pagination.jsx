import React from 'react'
import { Button } from '@chakra-ui/react'
export const Pagination = ({page, increment,decrement,lastPage}) => {
    const prevPage = () =>{
        if(page>1){
            decrement()
        }
    }
    const nextPage = () => {
        if(page<lastPage){
            increment()
        }
    }
  return (
    <>
        {<div className='container d-flex m-4 justify-content-center'>
            <Button className='col-2' colorScheme='messenger' onClick={prevPage}>PREV</Button>

            <div className='page m-2'>Page <span className='page_color'>{page} of {lastPage}</span></div>

            <Button className='col-2' colorScheme='messenger' onClick={nextPage}>NEXT</Button>
        </div>}
    </>
  )
}
