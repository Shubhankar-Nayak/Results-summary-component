import React from 'react'
import data from '../data/data.json'
import image1 from '../assets/images/icon-reaction.svg'
import image2 from '../assets/images/icon-memory.svg'
import image3 from '../assets/images/icon-verbal.svg'
import image4 from '../assets/images/icon-visual.svg'

const Container = () => {
  return (
    <div className='w-[100%] h-full flex tablet:justify-center tablet:items-center'>
    <div className='w-[100%] h-full tablet:w-[55%] tablet:h-[55%] tablet:min-h-[400px] tablet:mx-auto tablet:my-auto flex flex-col tablet:flex-row shadow-2xl tablet:rounded-[2rem] font-Hanken'>
        <div className='w-[100%] h-[45%] tablet:w-[50%] tablet:h-full rounded-b-[2rem] tablet:rounded-t-[2rem] flex flex-col justify-center items-center text-white bg-gradient-to-t from-LightRoyalBlue to-LightSlateBlue'>
            <p className='text-[20px] p-5 font-bold text-LightLavender'>Your Result</p>
            <div className='flex flex-col justify-center items-center rounded-full bg-gradient-to-b from-LightRoyalBlue text-center p-3 aspect-square'>
                <p className='text-[55px] font-bold leading-10 pt-6'>76</p>
                <p className='p-4 font-bold text-LightLavender'>of 100</p>
            </div>
            <p className='text-[25px] font-bold pb-2'>Great</p>
            <p className='w-[70%] text-[16px] text-LightLavender text-center'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        <div className='w-[100%] tablet:w-[50%] text-[18px] font-bold font-Hanken mx-auto px-8'>
            <p className='text-xl text-DarkGrayBlue py-6 tablet:py-4'>Summary</p>
            <div className='tablet:w-full'>
              {data.map((i) => (
                <div className={`flex items-center ${i.category === "Reaction" ? "bg-[#fef2f2]" :
                                                     i.category === "Memory" ? "bg-[#fefce8]" :
                                                     i.category === "Verbal" ? "bg-[#f0fdf4]" :
                                                     i.category === "Visual" ? "bg-[#eff6ff]" : "bg-[]"} py-4 mb-4 tablet:mb-2 rounded-2xl justify-between`}>
                  <div className='flex'>
                    <img className='size-6 mx-4' src={`${i.category === "Reaction" ? image1 :
                                                   i.category === "Memory" ? image2 :
                                                   i.category === "Verbal" ? image3 :
                                                   i.category === "Visual" ? image4 : image1}`} alt="" />
                    <p className={`${i.category === "Reaction" ? "text-LightRed" :
                                   i.category === "Memory" ? "text-OrangeyYellow" :
                                   i.category === "Verbal" ? "text-GreenTeal" :
                                   i.category === "Visual" ? "text-CobaltBlue" : "text-black"}`}>{i.category}</p>
                  </div>                                     
                  
                  <div className='mr-5'>
                    <p className='text-DarkGrayBlue'>{i.score}<span className='px-2'>/</span><span className='text-LightLavender'>100</span></p>
                  </div>
                </div>
              ))}
            </div>
            <button className='text-white bg-DarkGrayBlue w-[100%] rounded-[25px] py-3 cursor-pointer active:bg-gradient-to-t active:from-LightRoyalBlue active:to-LightSlateBlue'>Continue</button>
        </div>
    </div>
    </div>
  )
}

export default Container