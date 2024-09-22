/* eslint-disable @typescript-eslint/no-explicit-any */
import { SelectedPage } from '@/share/types'
import { useForm } from 'react-hook-form'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import { motion } from 'framer-motion'
import Htext from '@/share/Htext'


type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const Contact = ({setSelectedPage}: Props) => {

    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

    const {
        register,
        trigger,
        formState:{errors}
    } = useForm();

    const onSubmit = async(e:any)=>{
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }

  return (
    <section id='contact' className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div
        onViewportEnter={()=>setSelectedPage(SelectedPage.Contact)}>
            {/*header */}
            <motion.div 
                className='md:w-3/5'
                initial="hidden"
                whileInView="visible"
                viewport={{once:true,amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                        hidden:{opacity:0,x:-50},
                        visible:{opacity:1,x:0}
                    }}
            >
                <Htext>
                    <span className='text-primary-500'>
                        JOIN NOW
                    </span>
                    TO GET IN SHAPE
                </Htext>
                <p className='my-5'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi cumque optio dolor aperiam, repudiandae vel architecto quas explicabo tempore neque blanditiis at, ducimus fugit? Molestiae sunt fugit iusto illo adipisci!
                </p>
            </motion.div>
            {/* FORM AND IMAGE*/}
            <div className='mt-10 justify-between gap-8 md:flex'>
                <motion.div 
                    className='mt-10 basis-3/5 md:mt-0'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true,amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                            hidden:{opacity:0,y:50},
                            visible:{opacity:1,y:0}
                        }}
                >
                    <form onSubmit={onSubmit} target='_blank' action="https://formsubmit.co/c48ca7c9eb445868f19fd2497ac6c49d" method='POST'>
                        <input type="text" 
                         className={inputStyles} 
                         placeholder='NAME'
                         {...register("name",{
                            required:true,
                            maxLength:100,
                         })}/>
                         {errors.name&&(
                            <p className='mt-1 text-primary-500 '>
                                {errors.name.type === "required" && "This Field is required!"}
                                {errors.name.type === "maxLength" && "Max Length is 100 characters!"}
                            </p>
                         )}

                          <input type="text" 
                         className={inputStyles} 
                         placeholder='EMAIL'
                         {...register("email",{
                            required:true,
                            pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                         })}/>
                         {errors.email&&(
                            <p className='mt-1 text-primary-500 '>
                                {errors.email.type === "required" && "This Field is required!"}
                                {errors.email.type === "pattern" && "Invalid Email Address!"}
                            </p>
                         )}
                          <textarea rows={4} cols={50} 
                         className={inputStyles} 
                         placeholder='MESSAGE'
                         {...register("message",{
                            required:true,
                            maxLength:2000,
                         })}/>
                         {errors.message&&(
                            <p className='mt-1 text-primary-500 '>
                                {errors.message.type === "required" && "This Field is required!"}
                                {errors.message.type === "maxLength" && "Max Length is 2000 characters!"}
                            </p>
                         )}

                         <button 
                         type='submit'
                         className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
                         >
                            SUBMIT
                         </button>
                    </form>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true,amount:0.5}}
                    transition={{delay:0.2,duration:0.5}}
                    variants={{
                            hidden:{opacity:0,y:50},
                            visible:{opacity:1,y:0}
                        }}
                    className='relative mt-16 basis-2/5 md:mt-0'>
                        <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
                            <img src={ContactUsPageGraphic} alt="contact-us-page-graphic" className='w-full'/>
                        </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Contact