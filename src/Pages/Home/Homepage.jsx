import React from 'react'
import { Box } from '../../Components/Index'
import { Header } from '../../Components/Index'
import { Introduction, TechStack, Projects } from './index'

const Homepage = () => {
    return (
        <Box className="bg-slate-900 min-h-screen font-['ProtoMono']">
            <Header />
            <Introduction />
            <TechStack />
            <Projects />
        </Box>
    )
}

export default Homepage