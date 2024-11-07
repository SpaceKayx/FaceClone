import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { IoHomeOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { img } from '../../image';
import { CiWifiOn } from "react-icons/ci";
import "../../css/article.scss"

const Article = ({props}) => {
    const {account} = props
    console.log(account, "Article");
    return (
        <article className="col-6 mt-2" >
            <Card className='mb-3'>
                <Card.Title className='mt-3 ms-3'>Giới thiệu</Card.Title>
                <Card.Body className='relative'>
                    <Card.Title className='flex mb-3'>
                        <IoHomeOutline size={25} className='me-2'/>
                        {account.address}
                    </Card.Title>
                    <Card.Title className='flex mb-3'>
                        <FaHeart size={25} className='me-2'/>
                        {account.married ? "Kết hôn" : "Độc thân"}
                    </Card.Title>
                    <Card.Title className='flex mb-3'>
                        <CiWifiOn size={25} className='me-2'/>

                        Có 9,999,999 người theo dõi
                    </Card.Title>
                    {/* <Button variant="primary">Đi ăn Jollibee hong ku</Button> */}
                </Card.Body>
            </Card>
            <Card className='pb-3'>
                <Card.Title className='mt-3 ms-3 flex justify-between'>
                    <p>
                        Ảnh
                    </p>
                    <Card.Link className='me-3'>Xem tất cả ảnh</Card.Link>
                </Card.Title>
                <div className='flex flex-wrap w-full gap-2 ms-[1.3rem]'>
                    {
                        img.map((value, index) =>
                            <div className='!w-[12rem] !h-[12rem]' key={index}>
                                <Card.Img src={value} className='h-full object-cover'></Card.Img>
                            </div>
                        )
                    }
                </div>
            </Card>
        </article>
    )
}


export default Article
