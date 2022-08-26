import React, { memo } from 'react'
import { useHeroes } from '../../hooks/useHeroes'
import { NavLink } from 'react-router-dom'
import { Box,  Menu, MenuButton, MenuList, MenuItem, Button, MenuDivider, MenuIcon } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'

export const SearchByPublisher = memo(({setReset}) => {
    const {getPublishers} = useHeroes()
    const publishers = getPublishers()
  return (
    <>
        <Menu>
            
                <h2>
                <MenuButton as={Button}>
                    <Box flex='1' textAlign='left'>
                    Select Publishers
                    <Icon as={ChevronRightIcon} />
                    </Box>
                </MenuButton>
                </h2> 
                <MenuList  maxHeight={"60vh"} overflowY={"scroll"}>
                    
                {
                    publishers?.map( publisher => (
                            <MenuItem as={Button} margin={'4px 0'}  key={publisher} onClick={setReset}>
                            <NavLink className="nav-item "  to={`/${publisher}`}
                                    >
                                        {publisher}
                            </NavLink>
                            </MenuItem>
                            


                    ))
                }
                </MenuList>
        </Menu>
    
        <hr/>
    </>
  )
})
