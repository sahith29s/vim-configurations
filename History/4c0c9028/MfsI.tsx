import React from 'react'

const page = () => {
    return (
        <>


            <div className="container">
                {/* block1 left */}
                <div className='flex justify-between'>
                    <div className="max-w-[50%] my-[5rem]">
                        <div className="text-black leading-[4rem] heading text-[4rem] font-bold ">Reinventing the future of laundry and dry cleaning</div>
                        <div className="subheading mt-5 font-bold text-[1.3rem]">
                            Laundryheap delivers the quickest, easiest to use, and most reliable professional laundry and dry cleaning service that completely adjusts to your needs.
                        </div>
                        <div className="subheading2 mt-3 text-[1.2rem]">
                            We collect, clean, and deliver your laundry to your doorstep. When and where you need us, we will be there. 98.7% of all standard laundry and dry cleaning is delivered the next day.
                        </div>
                    </div>

                    {/* block1 right */}
                    <div className="right flex items-center">
                        {/* photo */}
                        <div className='flex justify-center'>
                            sahith
                        </div>

                    </div>
                </div>

                {/* block2 */}

                <div className="flex justify-around">
                    <div className='border-black border-2 py-10 px-[7rem]'>Xyz</div>
                    <div className='border-black border-2 py-10 px-[7rem]'>Xyz</div>
                    <div className='border-black border-2 py-10 px-[7rem]'>Xyz</div>
                    <div className='border-black border-2 py-10 px-[7rem]'>Xyz</div>
                </div>

                {/* block3 left*/}
                <div className="flex justify-between mt-10">Sahith</div>


            </div>

        </>
    )
}

export default page