import React from "react";
import { BiWorld } from "react-icons/bi";
import scanner from "../../Assets/scanner.png";
import signature from "../../Assets/signature.jpg";

const Document = () => {
   document.title = "ভূমি উন্নয়ন কর সিস্টেম অটোমেশন:LdtaxHoldings";
   return (
      <div className="border border-[#4b8df8] rounded mx-auto mb-16 lg:mx-5 md:mx-0 mt-24">
         {/*------top header--------  */}
         <div className="h-10 bg-blue flex items-center">
            <h5 className="text-gray-100 inline-flex items-center ml-2">
               <BiWorld size={23} className="mr-2" />
               ভূমি উন্নয়ন কর পরিশোধ রসিদ
            </h5>
         </div>

         <div className="px-5 mx-auto">
            {/*------bottom header--------  */}
            <div className=" my-4 text-gray">
               <div className="flex justify-between items-center text-[13px]">
                  <div className="text-center ">
                     <p>বাংলাদেশ ফরম নং ১০৭৭</p>
                     <p>(সংশোধিত)</p>
                  </div>
                  <div className="text-end">
                     <p>(পরিশিষ্ট: ৩৮)</p>
                     <p>ক্রমিক নং ৫৪৫৪২২০১০৪৪০</p>
                  </div>
               </div>
            </div>

            {/*------Form-------  */}

            <div className="min-w-[100%] mx-auto text-gray text-[13px] my-6">
               <div className="text-[13px] flex justify-center items-center text-center mb-3 ">
                  <div>
                     <p>ভূমি উন্নয়ন কর পরিশোধ রসিদ</p>
                     <p>(অনুচ্ছেদ ৩৯২ দ্রষ্টব্য)</p>
                  </div>
               </div>
               <div>
                  <div className="grid grid-cols-3 my-1.5">
                     <p>সিটি কর্পোরেশন /পৌর /ইউনিয়ন ভূমি অফিসের নাম : </p>
                     <p className="border-dotted border-b border-gray-800 col-span-2 px-3">
                        পৌর ভূমি অফিস
                     </p>
                  </div>
                  <div className="grid grid-cols-2 my-1.5">
                     <div className="grid grid-cols-6">
                        <p className="col-span-2">মৌজার ও জে. এল. নং: </p>
                        <p className="border-dotted border-b border-gray-800 col-span-4 px-3">
                           মাদারীপুর-১১৪
                        </p>
                     </div>
                     <div className="grid grid-cols-6">
                        <p className="col-span-2">উপজেলা / থানা : </p>
                        <p className="border-dotted border-b border-gray-800 col-span-4 px-3">
                           মাদারীপুর (সদর)
                        </p>
                     </div>
                  </div>
                  <div className="grid grid-cols-3 my-1.5">
                     <div className="grid grid-cols-6">
                        <p className="col-span-1">জেলা : </p>
                        <p className="border-dotted border-b border-gray-800 col-span-5 px-3">
                           মাদারীপুর
                        </p>
                     </div>
                     <div className="grid grid-cols-6 col-span-2">
                        <p className="">মালিকের নাম : </p>
                        <p className="border-dotted border-b border-gray-800 col-span-5 px-3">
                           ফেরদাউস জমাদ্দার
                        </p>
                     </div>
                  </div>
                  <div className="grid grid-cols-5">
                     <p>২ নং রেজিস্টার অনুযায়ী হোল্ডিং নম্বার : </p>
                     <p className="border-dotted border-b border-gray-800 col-span-4 px-3">
                        ৮২৫
                     </p>
                  </div>
                  <div className="grid grid-cols-12 my-1.5">
                     <p>জমির শ্রেণী : </p>
                     <p className="border-dotted border-b border-gray-800 col-span-11 px-3">
                        পালান ( আবাসিক )
                     </p>
                  </div>
                  <div className="grid grid-cols-12 my-1.5">
                     <p>খতিয়ান নং : </p>
                     <p className="border-dotted border-b border-gray-800 col-span-11 px-3">
                        ৮০৩
                     </p>
                  </div>
                  <div className="grid grid-cols-12 my-1.5">
                     <p>দাগ নং : </p>
                     <p className="border-dotted border-b border-gray-800 col-span-11 px-3">
                        ২৬২৬, ২৮১০, ২৮১১, ২৮২৩, ২৮২৪, ২৮২৯, ২৮৩৬, ২৮৩৮, ২৮৩৯, ২৮৪০, ২৮৭৫
                     </p>
                  </div>
                  <div className="grid grid-cols-12 my-1.5">
                     <p className="col-span-2">জমির পরিমাণ (শতক) : </p>
                     <p className="border-dotted border-b border-gray-800 col-span-10 px-3">
                        ৫.৫ , ৩.৫, ১০৫.৬৩, ২.২৫, ১৬.২৫, ২৪,৫, ২৩.৫, ১৮, ১৩, ১৪, ৩৪.৫
                     </p>
                  </div>
               </div>
            </div>

            {/*------table-------  */}

            <div class="min-w-[100%] mx-auto">
               <div class="w-full mb-8">
                  <div class="w-full overflow-x-auto">
                     <table class="w-full">
                        <thead>
                           <tr class="text-md font-semibold tracking-wide border text-left text-gray uppercase border-b hover:bg-[#f5f5f5] ">
                              <th class="px-4 py-2 text-[13px] text-center"></th>
                              <th class="px-4 py-2 text-[13px] text-center"></th>
                              <th class="px-4 py-2 text-[13px] text-end  ">
                                 আদায়ের বিবরণ
                              </th>
                              <th class="px-4 py-2 text-[13px] text-center"></th>
                              <th class="px-4 py-2 text-[13px] text-center"></th>
                              <th class="px-4 py-2 text-[13px] text-center"></th>
                              <th class="px-4 py-2 text-[13px] text-center"></th>
                              <th class="px-4 py-2 text-[13px] text-center"></th>
                           </tr>
                        </thead>

                        <tbody class="bg-white text-gray text-[13px]">
                           <tr class="text-center hover:bg-[#f5f5f5] font-semibold">
                              <td class="px-4 py-2 border">
                                 <p>তিন বৎসরের ঊর্ধ্বের বকেয়া</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>গত তিন বৎসরের বকেয়া</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>বকেয়ার সুদ ও ক্ষতিপূরণ</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>হাল দাবি</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>মোট দাবি</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>মোট আদায়</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>মোট বকেয়া</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>মন্তব্য</p>
                              </td>
                           </tr>
                        </tbody>
                        <tbody class="bg-white text-gray text-[13px]">
                           <tr class="text-center hover:bg-[#f5f5f5]">
                              <td class="px-4 py-2 border">
                                 <p>০</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>৬১৬২</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>৭৮৪</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>২০৫৪</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>৯০০০</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>৯০০০</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p>০</p>
                              </td>
                              <td class="px-4 py-2 border">
                                 <p></p>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>

            {/*------botttom section -------  */}
            <div className="min-w-[100%] mx-auto text-gray text-[13px] my-4 ">
               <div className="grid grid-cols-12">
                  <div className="col-span-6">
                     <p className="border-dotted border-b border-gray-800 col-span-10 px-3">
                        সর্বমোট (কথায়): নয় হাজার টাকা মাত্র ।
                     </p>
                     <p className="py-1">
                        নোট: সর্বশেষ কর পরিশোধের সাল - ১৪২৬ থেকে ১৪২৯
                     </p>
                     <p className="py-1">
                        প্রদানকারির নাম : তানিয়া আক্তার সুমি,রুনু বেগম
                     </p>
                     <div className="flex items-center">
                        <p>তারিখ :</p>
                        <div className="ml-2">
                           <p className="px-1">১৬ পৌষ ১৪২৯</p>
                           <p className="border-t inline-block border-gray-800 px-1">
                              ৩১ ডিসেম্বর, ২০২২
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-span-1 md:mt-3 mt-8">
                     <div className="flex justify-center items-center">
                        <img
                           className="md:h-20 md:w-20"
                           src={scanner}
                           alt=""
                        />
                     </div>
                  </div>
                  <div className="col-span-5 text-end md:mt-5 mt-10">
                     <p className="border-dotted border-t border-gray-800">
                        আদায়কারীর নাম ও স্বাক্ষর
                     </p>
                     <div className="flex justify-end">
                        <img className="w-20 pt-4" src={signature} alt="" />
                     </div>
                     <p>৩১/১২/২০২২</p>
                     <p>মোঃ আলী আকবর চৌধুরী</p>
                     <p>ইউনিয়ন ভূমি সহকারী কর্মকর্তা ,</p>
                     <p>পৌর ভূমি অফিস ,মাদারীপুর (সদর),মাদারীপু</p>
                  </div>
               </div>
               <div className="flex justify-center items-center pt-6 pb-2">
                  <a href="https://doc.ldtax.info/pdf/dakhila02.pdf">
                     <button className=" block bg-[#35aa47] px-4 py-2 rounded text-gray-50 hover:bg-[#2d8f3c] duration-300 ">
                        প্রিন্ট
                     </button>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Document;
