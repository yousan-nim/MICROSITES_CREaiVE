import React from 'react'

// <!-- BODY -->
// <!-- #F6E7DF -->
// <!-- #e4c7ad -->
// <!-- #dcbb9a -->
// <!-- #b18b68 -->

const CentralBeuatyAward = () => {
    return (
        <div className='relative w-screen h-screen overflow-hidden bg-[#F6E7DF]'>

            <div className='absolute w-screen items-center text-center text-[200px] text-black m-auto '>
                {/* CENTRAL  */}
            </div>

            <div className='absolute z-50 w-full h-full opacity-90'>
                <video
                    loop
                    muted
                    autoPlay
                    preload='none'
                    className='w-full'
                >
                    <source
                        src="/mp4/award.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
        </div>
    )
}

export default CentralBeuatyAward