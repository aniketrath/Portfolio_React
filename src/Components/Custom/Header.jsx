import React from 'react'
import { Box, Text } from '../Index'

const Header = () => {
    return (
        <Box horizontal className='text-white justify-between py-8 px-20'>
            <Text className='text-4xl font-bold'>Aniket .</Text>
            {/* <Button className='text-slate-400 text-xl font-semibold
            outline outline-2 outline-green-400 px-4 py-2 rounded-2xl
            hover:text-slate-300 transition-all ease-in-out duration-200'>Contact</Button> */}
        </Box>
    )
}

export default Header