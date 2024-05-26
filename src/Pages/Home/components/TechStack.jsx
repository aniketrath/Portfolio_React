import React from 'react'
import { Box, Text, Image } from '../../../Components/Index'
import { Python, Html5 } from 'iconsax-react';
import {
    Javaicon, CSSicon,
    JSicon, GRAFANAicon, JENKINSicon, DJANGOicon, DOCKERicon, REACTicon, SLACKicon
} from '../../../Images/index'

const TechStack = () => {
    return (
        <Box className='text-white px-40 bg-slate-600 py-4'>
            <Text className='text-[3rem] font-bold text-center'>Competencies</Text>
            <Box animate='fade-up' duration='1000' horizontal className='gap-4 my-6 justify-center'>
                <Box horizontal className=' bg-slate-900 px-4  text-2xl py-3 backdrop-blur-xl rounded-xl gap-4'>
                    <Html5
                        size="26"
                        color="#d9e3f0"
                        className='my-1'
                    />
                    <Text className='font-semibold'> HTML</Text>
                </Box>
                <Box horizontal className=' bg-slate-900 px-4  text-2xl py-3 backdrop-blur-xl rounded-xl gap-4'>
                    {/* <CssIcon fontSize='large' /> */}
                    <Image className='h-6 my-1' src={CSSicon}></Image>
                    <Text className='font-semibold'> CSS</Text>
                </Box>
                <Box horizontal className=' bg-slate-900 px-4  text-2xl py-3 backdrop-blur-xl rounded-xl gap-4'>
                    {/* <JavaScript
                        size="26"
                        color="#d9e3f0"
                        className='my-1'
                    /> */}
                    <Image className='h-6 my-0.5' src={JSicon}></Image>
                    <Text className='font-semibold'> JAVASCRIPT</Text>
                </Box>
                <Box horizontal className=' bg-slate-900 px-4  text-2xl py-3 backdrop-blur-xl rounded-xl gap-4'>
                    <Image className='h-6 my-0.5' src={Javaicon}></Image>
                    <Text className='font-semibold'> JAVA</Text>
                </Box>
                <Box horizontal className=' bg-slate-900 px-4  text-2xl py-3 backdrop-blur-xl rounded-xl gap-4'>
                    <Python
                        size="26"
                        color="#d9e3f0"
                        className='my-1'
                        variant="Bulk"
                    />
                    <Text className='font-semibold'> PYTHON</Text>
                </Box>
            </Box>
            <Box animate='fade-down' duration='1000' horizontal className='gap-4 mb-6 justify-center'>
                <Box horizontal className=' bg-slate-900 px-4  text-2xl py-3 backdrop-blur-xl rounded-xl gap-4'>
                    <Image className='h-6 my-1' src={DOCKERicon}></Image>
                    <Text className='font-semibold'> DOCKER </Text>
                </Box>
                <Box horizontal className=' bg-slate-900 px-4  text-2xl py-3 backdrop-blur-xl rounded-xl gap-4'>
                    <Image className='h-6' src={REACTicon}></Image>
                    <Text className='font-semibold'> REACT.JS </Text>
                </Box>
                <Box horizontal className=' bg-slate-900 px-4  text-2xl py-3 backdrop-blur-xl rounded-xl gap-4'>
                    <Image className='h-6 my-1' src={DJANGOicon}></Image>
                    <Text className='font-semibold'> DJANGO </Text>
                </Box>
                <Box horizontal className=' bg-slate-900 px-4  text-2xl py-3 backdrop-blur-xl rounded-xl gap-4'>
                    <Image className='h-6 my-1' src={SLACKicon}></Image>
                    <Text className='font-semibold'> SLACK API</Text>
                </Box>
                <Box horizontal className=' bg-slate-900 px-4  text-2xl py-3 backdrop-blur-xl rounded-xl gap-4'>
                    <Image className='h-6 my-1' src={GRAFANAicon}></Image>
                    <Text className='font-semibold'> GRAFANA </Text>
                </Box>
                <Box horizontal className=' bg-slate-900 px-4  text-2xl py-3 backdrop-blur-xl rounded-xl gap-4'>
                    <Image className='h-6 my-1' src={JENKINSicon}></Image>
                    <Text className='font-semibold'> JENKINS </Text>
                </Box>
            </Box>

        </Box>
    )
}

export default TechStack