import { ClassType, SelectedPage } from '@/share/types'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from 'framer-motion'
import Htext from '@/share/Htext'
import Class from './Class'

const classes:Array<ClassType> =[
  {
    name:"Weight Training Classes",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus. Explicabo repudiandae",
    image:image1
  },
  {
    name:"Weight Training Classes",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus. Explicabo repudiandae",
    image:image2
  },
  {
    name:"Weight Training Classes",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus. Explicabo repudiandae",
    image:image3
  },
  {
    name:"Weight Training Classes",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus. Explicabo repudiandae",
    image:image4
  },
  {
    name:"Weight Training Classes",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus. Explicabo repudiandae",
    image:image5
  },
  {
    name:"Weight Training Classes",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus. Explicabo repudiandae",
    image:image6
  },
]

type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const Classes = ({setSelectedPage}: Props) => {
  return (
    <section id='classes' className='w-full bg-primary-100 py-40'>
      <motion.div
      onViewportEnter={()=>setSelectedPage(SelectedPage.Classes)}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{once:true,amount:0.5}}
          transition={{duration:0.5}}
          variants={{
              hidden:{opacity:0,x:-50},
              visible:{opacity:1,x:0}
          }}
          className='mx-auto w-5/6'
        >
          <div className='md:w-3/5'>
            <Htext>OUR CLASSES</Htext>
            <p className='py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint eaque facere fugiat velit rerum fugit, numquam eius soluta dolorem.</p>
          </div>
        </motion.div>
          <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
            <ul className='w-[2800px] whitespace-nowrap'>
              {classes.map((item,index)=>(
                <Class
                key={index}
                classData={item}
                />
              ))}
            </ul>
          </div>
      </motion.div>
    </section>
  )
}

export default Classes