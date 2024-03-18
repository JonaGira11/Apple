import gsap from "gsap"
import { useGSAP } from "@gsap/react"


const Hightlights = () => {
  useGSAP(()=>{
    gsap.to('#title', {opacity: 1, y:0 })
  },[])
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
<div className="screen-max-width">
  <div className='mb-12 w-full items-end justify-between'>
    <h1 id='title' className='section-heading'>Get the highlights</h1>
    <div className="flex flex-wrap gap-5 items-end">
      <p className="link">
        watch the film
        <img src  />
      </p>

    </div>
  </div>
</div>
    </section>
  )
}

export default Hightlights