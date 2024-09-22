import Htext from '@/share/Htext';
import { SelectedPage,BenefitType } from '@/share/types'
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon} from '@heroicons/react/24/solid'
import { motion } from 'framer-motion';
import BenefitBox from './BenefitBox';
import ActionButton from '@/share/ActionButton';
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png"



const benefits:Array<BenefitType> =[
  {
    icon:<HomeModernIcon className='h-6 w-6'/>,
    title:"State of the Art Facilities",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus. Explicabo repudiandae",
  },
  {
    icon:<UserGroupIcon className='h-6 w-6'/>,
    title:"100 of Diverse Classes",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus. Explicabo repudiandae",
  },
  {
    icon:<AcademicCapIcon className='h-6 w-6'/>,
    title:"Expert and Pro Trainers",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus. Explicabo repudiandae",
  },
]

const container = {
  hidden:{},
  visible:{
    transition:{staggerChildren:0.2}
  }
}

type Props = {
  setSelectedPage:(value:SelectedPage)=>void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
      <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}>
        {/* Header */}
        
        <motion.div
          initial="hidden"
                      whileInView="visible"
                      viewport={{once:true,amount:0.5}}
                      transition={{duration:0.5}}
                      variants={{
                          hidden:{opacity:0,x:-50},
                          visible:{opacity:1,x:0}
                      }}
          className='md:my-5 md:w-3/5'
          >
            <Htext>MORE THAN JUST A GYM</Htext>
            <p className='my-5 text-sm'>We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.</p>
        </motion.div>

        {/*Benefits*/}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{once:true,amount:0.5}}
          variants={container}
          className='md:flex items-center justify-between gap-8 mt-5'
          >
            {benefits.map((benefit:BenefitType)=>(
              <BenefitBox key={benefit.title} benefit={benefit} setSelectedPage={setSelectedPage}/>
            ))}
        </motion.div>

        {/*GRAPPHIC AND DESCRIPTION */}
        <div className='mt-16 items-center justify-between gap-20  md:mt-28 md:flex'>
          {/*GRAPPHIC */}
          <img className='mx-auto' src={BenefitPageGraphic} alt="graphic-img" />
          {/* DESCRIPTION */}
          <div>
            {/*TITLE */}
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                <motion.div 
                initial="hidden"
                      whileInView="visible"
                      viewport={{once:true,amount:0.5}}
                      transition={{duration:0.5}}
                      variants={{
                          hidden:{opacity:0,x:50},
                          visible:{opacity:1,x:0}
                      }}>
                  <Htext>
                      MILLIONS OF HAPPY MEMBERS GETTING {' '} 
                      <span className='text-primary-500'>FIT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>


            {/*DESCRIPT */}
            <motion.div 
            initial="hidden"
                      whileInView="visible"
                      viewport={{once:true,amount:0.5}}
                      transition={{delay:0.2,duration:0.5}}
                      variants={{
                          hidden:{opacity:0,x:50},
                          visible:{opacity:1,x:0}
                      }}>
              <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore itaque aliquam quia ducimus incidunt repellat rerum, placeat soluta nostrum, minus iusto neque quisquam maxime, cumque pariatur asperiores fugit option. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quo nostrum minima natus, dolorem nam corporis magni maiores, reiciendis.</p>
              <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta atque cupiditate repellendus dolore voluptatibus possimus consectetur at eum animi impedit exercitationem aspernatur porro cum quam, nemo ut commodi nihil quod.</p>
            </motion.div>

            {/*BUTTON */}
            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits