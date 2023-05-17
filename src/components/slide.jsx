import {motion} from 'framer-motion'
import {useRef,useEffect,useState} from 'react'
import images from './imagesSlide'

const Carousel = {
    cursor: 'grab',
    overflow: 'hidden',
    // background:'red',
    margin:'1rem 2rem'

}
const item = {
    minHeight: '15rem',
    minWidth: '15rem',
    padding: 4,
}

const InnerCarousel = {
    display:'flex',
    // background:'blue'
}

const Slide = () =>{
    const [width,setWidth] = useState(0)
    const carousel = useRef()

    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])


    return(
        <>
            <motion.div style={Carousel} ref={carousel} whileTap={{cursor:'grabbing'}}>
                <motion.div drag='x' dragConstraints={{right:0,left:-width}} style={InnerCarousel}>
                    {images.map(image =>{
                        return (
                            <motion.div style={item}>
                                <img style={{pointerEvents:'none',borderRadius:50}} width='100%' height='100%' src={image} alt=''/>
                            </motion.div>
                        )
                    })

                    }
                </motion.div>
            </motion.div>
        </>
    )
}

export default Slide