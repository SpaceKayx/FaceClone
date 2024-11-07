import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { IoMdImages } from 'react-icons/io'
import { MdAccountCircle, MdOutlineEmojiEmotions, MdPersonAddAlt1 } from 'react-icons/md'
import { createPoster, getAllPoster } from '../../../service/AccountService'
import Swal from 'sweetalert2'

const CreatePosterLoad = ({ props }) => {
    const { account, setListPoster } = props
    const [description, setDescription] = useState('')
    function notify(title, description, icon) {
        Swal.fire({
            title: title,
            text: description,
            icon: icon
        });
    }
    async function handleCreatePoster(e) {
        e.preventDefault()
        const infoPoster = getInfoPoster()
        if (infoPoster) {
            const response = await createPoster(infoPoster)
            console.log(response);
            if (response.status === 201) {
                notify("Thông báo", "Bài viết đã được đăng thành công", "success")
                loadPoster();
                setDescription('')
            }
        }
    }
    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            handleCreatePoster(event)
        }
    }
    const getInfoPoster = () => {
        if (description === "") {
            notify("Không thể đăng bài viết", "Vui lòng kiểm tra lại bài viết !!", "error")
            return;
        }
        const poster =
        {
            description: description,
            accountId: {
                accountId: account.id
            },
            premiereDate: new Date()
        }
        return poster;
    }
    async function loadPoster() {
        const response = await getAllPoster(account.id);
        setListPoster(response.data)
    }
    return (
        <Card>
            <Card.Title className='flex m-2 border-b-4 pb-2 align-items-center'>
                <MdAccountCircle size={60} />
                <input
                    onChange={(e) => setDescription(e.target.value)}
                    onKeyDown={handleEnter}
                    value={description}
                    type="text"
                    name='description'
                    placeholder="Bạn đang nghĩ concac gì ?"
                    className="w-full h-[2.8rem] rounded-md border-gray-200 py-2.5 pe-2 shadow-sm sm:text-sm border rounded-full ms-2 ps-3" />
                <Button variant="primary" className='ms-3' onClick={(e) => handleCreatePoster(e)}>Đăng</Button>

            </Card.Title>
            <Card.Body className='relative flex justify-between'>
                <div className='w-full flex justify-center align-items-center'>
                    <IoMdImages size={25} className='me-2' />
                    Ảnh / Video
                </div>
                <div className='w-full flex justify-center align-items-center'>
                    <MdPersonAddAlt1 size={25} className='me-2' />
                    Gắn thể người khác
                </div>
                <div className='w-full flex justify-center align-items-center'>
                    <MdOutlineEmojiEmotions size={25} className='me-2' />
                    Cảm xúc / hoạt động
                </div>
            </Card.Body>
        </Card>
    )
}

export default CreatePosterLoad
