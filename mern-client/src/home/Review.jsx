import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// react icons
import { Avatar } from "flowbite-react";
import { FaStar } from 'react-icons/fa6';
import Bhupender from "../assets/bhupender.jpg";
import Srivastav from "../assets/srivastav.jpg";
import ant from "../assets/ant.jpg";
import birju from "../assets/brijesh.jpg";

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-sung'>Our Customers</h2>
        <div>
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide className='space-y-6 shadow 2xl bg-white py-8px-4 md:m-5 rounded-lg border'>
            <div>
                <div className=' flex text-amber-500 gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p>
                        I love that I could see into her mindset and read exactly what she was feeling when she thought out 
                        situations. Her thoughts flowed well and moved the book along very quickly. Cassandra's narrative
                        voice is wonderful. She is serious at times, but also very witty, which makes for an engaging read.
                    </p>

                    <Avatar img ={Bhupender} alt="avatar of Bhu" rounded  className='w-10 mb-4 mt-2'/>
                    <h5 className='text-lg font-medium'>Bhupender Chauhan</h5>
                    <p className='text-base'> CEO,Ananomous Chatbox</p>

                </div>

                
            </div>
            </SwiperSlide>

            <SwiperSlide className='space-y-6 shadow 2xl bg-white py-8px-4 md:m-5 rounded-lg border'>
            <div>
                <div className=' flex text-amber-500 gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p>
                        Had high expectations for 'Where the Crawdads Sing' by Delia Owens, but it fell short for me.
                        While the descriptions of the marshland were vivid and the protagonist's backstory was
                        intriguing, the plot felt slow and predictable. The romance aspect seemed forced and detracted
                        from the mystery element. Overall, it was an okay read, but not as captivating as I had hoped.
                    </p>

                    <Avatar img ={Srivastav} alt="avatar of Sri" rounded  className='w-10 mb-4 mt-2'/>
                    <h5 className='text-lg font-medium'>Ankit Srivastav</h5>
                    <p className='text-base'> Founder,Car Priceo</p>

                </div>

                
            </div>
            </SwiperSlide>

            <SwiperSlide className='space-y-6 shadow 2xl bg-white py-8px-4 md:m-5 rounded-lg border'>
            <div>
                <div className=' flex text-amber-500 gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p>
                        Harry Potter and the Sorcerer's Stone' by J.K. Rowling is a timeless classic that continues
                        to enchant readers of all ages. The magical world of Hogwarts is vividly brought to life,
                        and the characters are wonderfully crafted. It's a perfect blend of fantasy, adventure, and
                        friendship. Reading it again as an adult, I still find myself lost in the magic. Highly
                        recommended for anyone who loves a good story.
                    </p>

                    <Avatar img ={ant} alt="avatar of Ant" rounded  className='w-10 mb-4 mt-2'/>
                    <h5 className='text-lg font-medium'>Antareep Das</h5>
                    <p className='text-base'> CEO,Typing Tester</p>

                </div>

                
            </div>
            </SwiperSlide>

            <SwiperSlide className='space-y-6 shadow 2xl bg-white py-8px-4 md:m-5 rounded-lg border'>
            <div>
                <div className=' flex text-amber-500 gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p>
                        Margaret Atwood's 'The Handmaid's Tale' is a powerful and unsettling dystopian novel that 
                        remains relevant today. The world-building is chillingly realistic, and the themes of control,
                        freedom, and resistance are handled with great depth. While the pacing can be slow at times,
                        the story's impact is undeniable. It's a challenging read, but one that is definitely worth
                        the effort.
                    </p>

                    <Avatar img ={birju} alt="avatar of Birju" rounded  className='w-10 mb-4 mt-2'/>
                    <h5 className='text-lg font-medium'>Brijesh Verma</h5>
                    <p className='text-base'> CEO,Laptop Price Predictor</p>

                </div>

                
            </div>
            </SwiperSlide>

        </Swiper>
        </div>

    </div>
  )
}

export default Review