import { motion } from 'framer-motion'
export default function Footer() {
  return (
    <>
    <section className='w-full lg:h-72 h-96  border bg-indigo-500  lg:flex ' >
    <div className='lg:w-2/4 lg:h-full h-1/2  displayFlex flex-col border-r-2 border-black'>
      <motion.div initial={{scale:1}} whileHover={{scale:1.1}} className='overflow-hidden mx-5 bg-white lg: border-black lg:border-4 p-3 font-mono text-3xl ' > Thrift Terrane</motion.div>
      <p className='mt-3 font-medium text-lg'>The one stop shop</p>
    </div>
    <div className='lg:w-1/2 lg:h-full h-1/2 lg:flex justify-center lg:justify-evenly flex items-center border-t-2 border-black flex-col lg:flex-row'>
      <div className='border-2 p-2 border-indigo-900'> 
        <p className='text-center text-white'>Contact</p>
        <p className='text-yellow-300 font-sans text-xl'>ThriftTerrane@gmail.com</p>
      </div>
      <motion.div  className='border-2 overflow-hidden p-2 mt-3 lg:mt-0 border-indigo-900'> 
      <h1 className='text-center text-lg text-white'>Socials</h1>
      <motion.i initial={{scale:1}} whileHover={{scale:1.1}} className="fa-brands fa-facebook mx-2 text-3xl p-2 overflow-hidden"></motion.i>
      <motion.i initial={{scale:1}} whileHover={{scale:1.1}} className="fa-brands fa-x-twitter text-3xl p-2 overflow-hidden"></motion.i>
      <motion.i initial={{scale:1}} whileHover={{scale:1.1}} className="fa-brands fa-instagram mx-2 text-3xl p-2 overflow-hidden"></motion.i>
      <motion.i initial={{scale:1}} whileHover={{scale:1.1}} className="fa-brands fa-pinterest text-3xl p-2 overflow-hidden"></motion.i>
      </motion.div>
    </div>

    </section>
    </>
  )
}
