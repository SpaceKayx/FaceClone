import React, { useState } from 'react'
import Card from 'react-bootstrap/esm/Card';
import { MdAccountCircle } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

import '../css/section.scss'
import { img } from '../image';
import Button from 'react-bootstrap/esm/Button';
const Section = ({props}) => {
    const myAccount = props.account;
    console.dir(myAccount);
    return (
        <section className='bg-white'>
            <section className='flex justify-between w-full h-[10rem] rounded border-bottom'>
                <div className='flex justify-between'>
                    <div className='account flex w-[17rem] h-full justify-center'>
                        <MdAccountCircle size={200} color='gray'/>
                    </div>
                    <div className='content'>
                        <Card style={{ width: '18rem' }} className='border-0'>
                            <Card.Body className='mt-3'>
                                <Card.Title className=''>{myAccount.firstName + ' ' + myAccount.lastName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">83 bạn bè</Card.Subtitle>
                                <div className='flex'>
                                    {
                                        img.map((value) =>
                                            <div className=' !w-[2.5rem] !h-[2.6rem]' key={value}>
                                                <Card.Img src={value} className='!rounded-full w-full h-full object-cover' />
                                            </div>
                                        )
                                    }
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
                <div className='flex justify-content-center align-items-center relative'>
                    <div className='me-5 absolute w-[9rem] right-[200px]'>
                        <Button className='w-full'>
                            <GoPlus className='absolute m-0 mt-2' size={20} />
                            <p className='ms-3 mb-1 mt-1'>
                                Thêm vào tin
                            </p>
                        </Button>
                    </div>
                    <div className='absolute w-[13.7rem] right-0'>
                        <Button className=' flex justify-center align-items-center py-2 w-full bg-white text-dark border-dark'>
                            <FaPen className='absolute m-0' size={17} />
                            <p className='m-0 ms-3'>
                                Chỉnh sửa trang cá nhân
                            </p>
                        </Button>
                    </div>
                </div>
            </section>
            <div>
                <div className="hidden sm:block">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex gap-6 mt-2 ms-2" aria-label="Tabs">
                            <button href="#" aria-current="page" className="shrink-0 border-b-4 text-primary     border-sky-500 py-3 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                                Bài viết
                            </button>
                            <button href="#" className="shrink-0 border-b-2 border-transparent py-3 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                                Giới thiệu
                            </button>

                            <button href="#" className="shrink-0 border-b-2 border-transparent py-3 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                                Bạn bè
                            </button>

                            <button href="#" className="shrink-0 border-b-2 border-transparent py-3 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                                Ảnh
                            </button>

                            <button href="#" className="shrink-0 border-b-2 border-transparent py-3 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                                Video
                            </button>

                            <button href="#" className="shrink-0 border-b-2 border-transparent py-3 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                                Thể thao
                            </button>
                            <select className="rounded-md my-2 border-gray-200">
                                <option value={'More'}>Xem thêm</option>
                                <option value={'Message'}>Message</option>
                                <option value={'Archive'}>Archive</option>
                                <option value={'Notifications'}>Notifications</option>
                            </select>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section
