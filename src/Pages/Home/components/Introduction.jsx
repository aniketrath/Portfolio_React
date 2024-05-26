import React from 'react'
import { Box, Text, Image, Button } from '../../../Components/Index'
import { MyImage } from '../../../Images/index'

import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Introduction = () => {
    const openSite = (link) => {
        if (link === "Github") {
            window.open('https://github.com/aniketrath', '_blank');
        }
        if (link === "X") {
            window.open('https://x.com/Roy89_Aniket', '_blank');
        }
        if (link === "LinkedIn") {
            window.open('https://www.linkedin.com/in/aniket-rath-19b04a195/', '_blank');
        }
    };
    return (
        <Box animate='fade-in' duration='1000' horizontal className=' justify-between xl:px-40 2xl:px-[15vw] mt-10 mb-20'>
            <Box className='text-white 2xl:text-[3.15rem] xl:text-[2.9rem] font-bold'>
                <Text className=''> Hi there !</Text>
                <Text className=''>This is
                    <span className='mx-7 
                    bg-gradient-to-r from-orange-500 to-violet-700 via-red-500
                     text-transparent bg-clip-text'>Aniket.</span>
                </Text>
                <Text>& Welcome to my Site .</Text>
                <Box className='bg-gray-500 min-h-1 my-1 rounded-full' />
                <Box horizontal className='gap-4'>
                    <Button onClick={() => openSite('X')} className=''>
                        <XIcon data-aos-duration="1000" className='p-1' fontSize='extralarge' />
                    </Button>
                    <Button onClick={() => openSite('Github')} className=''>
                        <GitHubIcon className='p-1' fontSize='extralarge' />
                    </Button>
                    <Button onClick={() => openSite('LinkedIn')}>
                        <LinkedInIcon fontSize='extralarge' />
                    </Button>
                </Box>
            </Box>

            <Box className='text-white text-[3.5rem] '>
                <Image className=' w-[30vw] rounded-3xl' src={MyImage} />
            </Box>

        </Box>
    )
}

export default Introduction