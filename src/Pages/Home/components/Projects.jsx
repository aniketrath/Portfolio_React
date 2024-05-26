import React, { useState } from 'react'
import { Box, Text, Image, Button } from '../../../Components/Index'
import { Harmonya, Cryptos, DockerLogger, HealthMonitoriing, LoginUI } from '../../../Images/index'

const CarouselComp = ({ image, text }) => {
    const [isHovered, setIsHovered] = useState(false);
    const openSite = (link) => {
        if (link === "Harmonya") {
            window.open('https://github.com/aniketrath/Harmonya', '_blank');
        }
        if (link === "App Logger") {
            window.open('https://github.com/aniketrath/DockerFiles', '_blank');
        }
        if (link === "Cryptos") {
            window.open('https://github.com/aniketrath/cryptos_', '_blank');
        }
        if (link === "Login.Ui") {
            window.open('https://github.com/aniketrath/Login.uI', '_blank');
        }

    };
    return (
        <Box
            className='relative rounded-xl mx-4 min-h-[26vw] min-w-[26.1vw]'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => openSite(text)}
        >
            <Image className='w-[26vw] rounded-xl outline-2 outline-black outline' src={image} />

            <Box
                animate='fade-up'
                className={`absolute h-[26vw] w-[26.1vw] bg-zinc-950/70 rounded-xl transition-all duration-300 outline-2 outline-black outline ${isHovered ? '' : 'backdrop-blur-xl'}`}
            >
                <Text className='mx-auto my-auto text-[3.5rem] font-bold text-zinc-200 px-4'>{text}</Text>
            </Box>
        </Box>
    )
}

const Projects = () => {

    return (
        <Box className='text-white my-6 px-20 gap-10'>
            <Text className='text-[3rem] font-bold text-center mb-4'>Projects</Text>
            <Box horizontal className='justify-center gap-10'>
                <CarouselComp
                    image={Harmonya}
                    text="Harmonya" />
                <CarouselComp
                    image={Cryptos}
                    text="Cryptos" />
                <CarouselComp
                    image={LoginUI}
                    text="Login.Ui" />
            </Box>
            <Box horizontal className='justify-center gap-10'>
                <CarouselComp
                    image={DockerLogger}
                    text="App Logger" />
                <CarouselComp
                    image={HealthMonitoriing}
                    text="Health Monitoring" />
            </Box>
        </Box>
    )
}

export default Projects