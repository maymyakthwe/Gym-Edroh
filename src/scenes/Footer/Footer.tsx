import Logo from '@/assets/Logo.png'


const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="logo" />
                <p className='my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod tempore ab quam provident vitae accusamus, quam provident vitae accusamus ratione placeat nemo.</p>
                <p>&copy; Evogym All Rights Reserved.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'> Duod tempore ab quam provident</p>
                <p className='my-5'> Quam provident vitae accusamus</p>
                <p> Huam provident vitae accusamus</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'> Elit. Quod tempore ab quam provident</p>
                <p className='my-5'> Quam provident  tempore accusamus</p>
                <p> (333)438-2324</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer