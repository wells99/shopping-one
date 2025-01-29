import brands from "../src/assets/Brands.png"
import person from "../src/assets/ImagenoBG.png"
import leaf from "../src/assets/leaf.png"


function HeroSection() {
 
  return (
    <>
      <div className="w-full h-screen bg-blue-500 pt-6 flex flex-col items-center ">
      <div className="h-[620px] w-[1080px] flex flex-row items-start pt-20 justify-center bg-[#eeecec] rounded-4xl ">
            <div id="text-Column" className="flex flex-col mb-20 font-bold text-4xl ">
                <div className="flex flex-col gap-2 items-start text-left pr-90">
                    <span className="bg-white w-34">
                      <p>LETS</p> 
                    </span>
                    <p>EXPLORE</p>
                    <span className="bg-[#EBD96B] w-44">
                      <p>UNIQUE</p>
                    </span>
                    <p>CLOTHES.</p>
                    <p className="text-base font-light mt-2.5">Live for Influential and Inovation fashion</p>
                </div>
                <div className="mt-2.5 flex flex-row items-center justify-start">
                  <img src={leaf} alt="leaf"  className="w-24 h-6"/>
                  <button className="mr-24 mt-2.5 text-2xl w-[132px] h-[42px] rounded-[7px] font-light bg-black text-white text-center hover:cursor-pointer">
                      <p >Shop Now</p>
                  </button>
                </div>
            </div>
            <div id="img-column" className="flex flex-col items-end justify-end">
                <img src={person} alt="Model" className="w-0 lg:w-[360px] h-90" />
            </div>
       </div>
       <div className="w-full mt-10 bg-[#EBD96B] ">
        <img src={brands} alt="Herosectionfooter"  className="w-full h-26 mb-0 "/>
       </div>
      </div>
    </>
  )
}

export default HeroSection