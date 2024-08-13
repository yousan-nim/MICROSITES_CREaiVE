// {/* <div className="w-screen h-screen bg-[#F6E7DF]">
//     <div className="flex w-full m-auto items-center justify-center">
//         <img src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png" />
//     </div>

//     {imgSrc ? (
//         <div>
//             <div className="relative">
//                 {/*  */}
//                 <img
//                     src={imgSrc}
//                     alt="webcam"
//                     className="z-0 flex blur-lg w-[1728px] h-auto m-auto items-center justify-center bg-white rounded-[40px]"
//                 />
//                 {/*  */}
//                 <div className="absolute z-10 w-full top-[40%]">
//                     <Loader />
//                 </div>
//             </div>

//             {/* 1728 1296 */}
//             <div className="relative w-full m-auto justify-center items-center flex ">
//                 <button
//                     className="absolute z-50 w-[150px] h-[150px] text-black text-center text-[40px] bg-white rounded-[100%] border-2 border-gray-400"
//                 // onClick={share}
//                 >
//                     <IoShareOutline
//                         className="w-full"
//                         size={80}
//                         style={{ color: "#7e7e7e" }}
//                     />
//                 </button>

//             </div>

//             {
//                 keepUrls.length === 4 && (
//                     <div className="absolute z-100 w-screen h-screen bg-[#F6E7DF]">
//                         <div className="flex w-full m-auto items-center justify-center">
//                             <img src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png" />
//                         </div>
//                         <div className="relative grid grid-cols-2 w-screen h-screen p-4 gap-4 bg-[#F6E7DF] pt-8">
//                             <img src={`https://campaign.creaive.ai/images/replicate/${keepUrls[0]}`}
//                                 className="w-full h-full"
//                             />

//                             <img src={`https://campaign.creaive.ai/images/replicate/${keepUrls[1]}`}
//                                 className="w-full h-full"
//                             />

//                             <img src={`https://campaign.creaive.ai/images/replicate/${keepUrls[2]}`}
//                                 className="w-full h-full"
//                             />

//                             <img src={`https://campaign.creaive.ai/images/replicate/${keepUrls[3]}`}
//                                 className="w-full h-full"
//                             />
//                         </div>
//                     </div>
//                 )
//             }
//         </div>
//     ) : (
//         <div>
//             <div className="absolute w-full items-center justify-center flex top-[30%] text-[200px]">
//                 {timeLeft}
//             </div>

//             <Webcam
//                 ref={webcamRef}
//                 screenshotFormat="image/png"
//                 className="flex w-[1728px] h-auto m-auto items-center justify-center bg-white rounded-[40px]"
//             />

//             <div className="relative w-full m-auto  justify-center items-center flex ">
//                 <button
//                     className="absolute w-[150px] h-[150px] text-black text-center text-[40px] bg-white rounded-[100%] border-2 border-gray-400"
//                     onClick={capture}
//                 >
//                     <FaCamera
//                         className="w-full m-auto"
//                         size={80}
//                         style={{ color: "#7e7e7e" }}
//                     />
//                 </button>
//             </div>
//         </div>
//     )}
// </div> */}