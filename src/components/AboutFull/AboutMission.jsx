// import React from 'react'
import Mission_1 from '../../assets/misson1.jpg'
import Mission_2 from '../../assets/misson2.jpg'
import Mission_3 from '../../assets/misson3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import { useTranslation } from 'react-i18next'

const AboutMission = () => {
    const { t, } = useTranslation();
  return (
    <div className="aboutMission 2xl:px-32 xl:px-28 lg:px-20 sm:px-8 px-4  mt-48 flex flex-col truncate ">
        
        {/* missiom 1 */}
        <div data-aos="fade-up" data-aos-duration="1000">       
            <span className='rounded-full px-3 py-1 bg-[#fab448] mb-2 ml-[-18px] text-2xl font-bold hidden lg:block w-10 text-center'>1</span>
            <div className='lg:flex lg:flex-row flex flex-col justify-between gap-2 border-0 lg:border-l-4 border-[#fab448] ' >
                <div className='lg:w-6/12  xl:w-5/12 2xl:w-4/12 w-full lg:pl-10' data-aos="fade-left" data-aos-duration="2000">
                    <h4 className='2xl:text-[48px] sm:text-[36px] text-[28px] font-[600]'>{t("aboutMission")}</h4>
                    <p className='2xl:text-[24px]  sm:text-[18px] text-[15px] font-[500] xl:leading-loose leading-relaxed mt-4 text-wrap'>
                    {t("aboutMissionText")}
                    </p>
                </div>
                <div className='lg:w-6/12 xl:w-7/12 2xl:w-8/12 w-full  my-5 hover:mt-[-10px] hover:mr-[-10px] transition-all delay-1000 duration-1000 ' data-aos="fade-left" data-aos-duration="2000" >
                    <img src={Mission_1} alt="" />
                </div>
            </div>
        </div>


        {/* missiom 2 */}
        <div data-aos="fade-up" data-aos-duration="1000">
            <span className='rounded-full px-4 py-3 bg-[#fab448] mb-2 ml-[-18px] text-2xl font-bold hidden  lg:block w-10 text-center mt-10' >2</span>
            <div className='lg:flex lg:flex-row flex flex-col justify-between gap-2 border-0 lg:border-l-4 border-[#fab448] ' >
                <div className='lg:w-6/12  xl:w-5/12 2xl:w-4/12 w-full lg:pl-10' data-aos="fade-down" data-aos-duration="2000">
                    <h4 className='2xl:text-[48px] sm:text-[36px] text-[28px] font-[600]'>{t("aboutVision")}</h4>
                    <p className='2xl:text-[24px]  sm:text-[18px] text-[15px] font-[500] xl:leading-loose leading-relaxed mt-4 text-wrap'>
                    {t("aboutVisionText")}
                    </p>
                </div>
                <div className='lg:w-6/12 xl:w-7/12 2xl:w-8/12 w-full  my-5 hover:mt-[-10px] hover:mr-[-10px] transition-all delay-1000 duration-1000 ' data-aos="fade-left" data-aos-duration="2000" >
                    <img src={Mission_2} alt="" />
                </div>
            </div>
        </div>

        {/* missiom 3 */}
        <div data-aos="fade-up" data-aos-duration="1000">
            <span className='rounded-full px-4 py-3 bg-[#fab448] mb-2 ml-[-18px] text-2xl font-bold hidden  lg:block w-10 text-center mt-10' >2</span>
            <div className='lg:flex lg:flex-row flex flex-col justify-between gap-2 border-0 lg:border-l-4 border-[#fab448] ' >
                <div className='lg:w-6/12  xl:w-5/12 2xl:w-4/12 w-full lg:pl-10' data-aos="fade-down" data-aos-duration="2000">
                    <h4 className='2xl:text-[48px] sm:text-[36px] text-[28px] font-[600]'>{t("aboutValue")}</h4>
                    <p className='2xl:text-[24px]  sm:text-[18px] text-[15px] font-[500] xl:leading-loose leading-relaxed mt-4 text-wrap'>
                    {t("aboutValueText")}
                    </p>
                </div>
                <div className='lg:w-6/12 xl:w-7/12 2xl:w-8/12 w-full  my-5   hover:mt-[-10px] hover:mr-[-10px] transition-all delay-1000 duration-1000 ' data-aos="fade-left" data-aos-duration="2000" >
                    <img src={Mission_3} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMission