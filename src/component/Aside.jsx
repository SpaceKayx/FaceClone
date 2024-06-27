import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { MdAccountCircle } from "react-icons/md";
import { IoMdImages } from "react-icons/io";
import { MdPersonAddAlt1 } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdCopy } from "react-icons/io";
import "../css/aside.scss"
import Button from 'react-bootstrap/esm/Button';
import Swal from 'sweetalert2'




const Aside = () => {
  const[write, setWrite] = useState("")
  const[writer, setWriter] = useState([])
  function handlePoster (e)
  {
    e.preventDefault()
    
      if(write != "")
      {
        setWriter([...writer, write])
        setWrite("")
      }
      else
      {
        Swal.fire({
          title: "Đăng không thành công",
          text: "Vui lòng nhập trạng thái !!",
          icon: "error"
        });
      }
    console.log(writer);
  }
  const handleEnter = (event) =>{
    if(event.key === 'Enter')
    {
      handlePoster(event)
    }
  }
  return (
    <aside className="col-6 mt-2 aside_content" >
      <Card>
        <Card.Title className='flex m-2 border-b-4 pb-2 align-items-center'>
          <MdAccountCircle size={60} />
          <input
            onChange={(e) => setWrite({...write, post: e.target.value, name: "Nguyễn Mẩn Đạt"})}
            onKeyDown={handleEnter}
            type="text"
            name='post'
            placeholder="Bạn đang nghĩ concac gì ?"
            className="w-full h-[2.8rem] rounded-md border-gray-200 py-2.5 pe-2 shadow-sm sm:text-sm border rounded-full ms-2 ps-3" />
          <Button variant="primary" className='ms-3' onClick={ (e) => handlePoster(e)}>Đăng</Button>
          
        </Card.Title>
        <Card.Body className='relative flex justify-between'>
          <div className='w-full flex justify-center align-items-center'>
            <IoMdImages size={32} className='me-2' />
            Ảnh / Video
          </div>
          <div className='w-full flex justify-center align-items-center'>
            <MdPersonAddAlt1 size={32} className='me-2' />
            Gắn thể người khác
          </div>
          <div className='w-full flex justify-center align-items-center'>
            <MdOutlineEmojiEmotions size={32} className='me-2' />
            Cảm xúc / hoạt động
          </div>
        </Card.Body>
      </Card>
      {
        writer.map((value) =>
          <Card className='mt-3'>
            <Card.Title className='flex m-2 pb-2 align-items-center'>
              <MdAccountCircle size={60} />
              <div className='mt-2 ms-2'>
                <Card.Text className='mb-1'>{value.name}</Card.Text>
                <h6>20/06/2024</h6>
              </div>
            </Card.Title>
            <Card.Body className='relative border-b-2 mb-3 p-0'>
              <Card.Title className='ms-3'>
                {value.post}
              </Card.Title>
              <div className='relative flex justify-between border-t-2 py-1'>
                <div className='w-full flex justify-center align-items-center'>
                  <AiOutlineLike size={32} className='me-2' />
                  Like
                </div>
                <div className='w-full flex justify-center align-items-center'>
                  <AiOutlineMessage size={32} className='me-2' />
                  Bình luận
                </div>
                <div className='w-full flex justify-center align-items-center'>
                  <IoMdCopy size={32} className='me-2' />
                  Sao chép
                </div>
              </div>
            </Card.Body>
            <Card.Footer className='bg-white'>
              <div className='flex justify-start'>
                <MdAccountCircle size={40} color='gray' />
                <div className='ms-2 px-3 bg-stone-300	rounded-full'>
                  <Card.Text className='m-0 font-black'>Khánh Huyền</Card.Text>
                  <h6>Ghê thế</h6>
                </div>
              </div>
            </Card.Footer>
          </Card>
        )
      }
    </aside>
  )
}
// const writer =
//   [
//     {
//       name: "Khánh Huyền",
//       post: "Hé lu"
//     },
//     {
//       name: "Tuyến",
//       post: "Bonjour"
//     },
//     {
//       name: "Mai Trâm",
//       post: "Anh định đấm tôi à???"
//     }
//   ]
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

export default Aside
