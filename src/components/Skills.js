import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold 
        bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        whileInView={{ x:x, y:y }}
        transition={{duration: 1.5}}
        viewport={{once: true}}
        >
        {name}
        </motion.div>

    )
}

const Skills = () => {
    return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills </h2>
    <div className='w-full h-screen relative flex item-center justify-center rounded-full bg-circularLight'>

       

        <Skill name="HTML" x="-20vw" y="2vw" />

        <Skill name="css" x="-5vw" y="5vw" />

        <Skill name="Javascript" x="30vw" y="16vw" />

        <Skill name="ReactJs" x="14vw" y="12vw" />

        <Skill name="NextJs" x="20vw" y="30vw" />

        <Skill name="Web Design" x="-10vw" y="36vw" />
        
        <Skill name="Figma" x="38vw" y="28vw" />

        <Skill name="Firebase" x="-10vw" y="20vw" />

        <Skill name="Tailwind Css" x="-25vw" y="18vw" />

    </div>


    </>
    )
}

export default Skills