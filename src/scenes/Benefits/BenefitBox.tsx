import { BenefitType, SelectedPage } from '@/share/types'
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const childVariant = {
    hidden:{ opacity:0, scale:0.9},
    visible: { opacity:1, scale:1 }
}

type Props = {
    benefit:BenefitType;
    setSelectedPage:(value:SelectedPage)=>void;
}

const BenefitBox = ({benefit,setSelectedPage}: Props) => {
  return (
    <motion.div
    variants={childVariant}
     className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'>
        <div className='mb-4 flex justify-center'>
            <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
                {benefit.icon}
            </div>
        </div>
        <h4 className='font-bold'>{benefit.title}</h4>
        <p className='my-3'>{benefit.description}</p>
            <AnchorLink 
                className=" text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={()=>setSelectedPage(SelectedPage.Contact)}
                href={`#${SelectedPage.Contact}`}>
                <p>learn more</p>
            </AnchorLink>
    </motion.div>
  )
}

export default BenefitBox