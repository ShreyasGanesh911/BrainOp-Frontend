import Card from '../components/Card'
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';
import InfiniteLoader from '../components/InfiniteLoader';
import { Props } from '../Types/ProductTypes';


export default function Dashboard() {
  const navigate = useNavigate()
  const [page,setPage] = useState(1)
  const [product,setProduct] = useState<Props[]>()
  let [loading, setLoading] = useState(true);
  const [scrollLoading,setScrollLoading] = useState(false)
  const getData = async()=>{
  try{
    const httpresponse = await fetch(`https://brainop-backend-00cw.onrender.com/user/data?page=${page-1}`, {
      method: "GET", 
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if(httpresponse.status === 401)
      return navigate('/')
    
    const data = await httpresponse.json()
    
    const {response} = data
    console.log(response)
    setTimeout(()=>{
      setLoading(false)
    },500)
    if(product){
      const oldProducts = product.concat(response)
      setProduct(oldProducts)
    }
     
    else
      setProduct(response)

  }catch(e){
    console.log(e)
  }
  }
  
  const handleScroll = async () => {
    if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
    ) {
        setScrollLoading(true);
        setPage((prev) => prev + 1);
    }
};
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    useEffect(()=>{
      getData()
    },[page])

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    },[])

  return (
    <>
    {loading? <Loader />:

    <>
          <section className='page flex justify-center bg-neutral-50 py-8 items-center flex-col'>
 
 <div className=' w-10/12 h-auto flex flex-wrap p-5 justify-around col-span-3 items-center'>
 {product?.map((e)=>{
     
     return(<Card discountPercentage={e.discountPercentage} title={e.title} description={e.description} brand={e.brand} images={e.images} category={e.category} price={e.price} rating={e.rating}stock={e.stock}/>)
 })}
 </div>

</section>
   {scrollLoading  && page<10 &&  <InfiniteLoader/>}
    </>
      
  }
    </>
  )
}

