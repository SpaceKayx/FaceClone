import React, { useEffect } from 'react'
import { Card, Container, Dropdown, Button } from 'react-bootstrap';
import { AiOutlineLike, AiOutlineMessage } from 'react-icons/ai';
import { IoMdCopy } from 'react-icons/io';
import { MdAccountCircle } from 'react-icons/md';
import CommentLoad from './CommentLoad';
import { createLike, deletePoster, getAllPoster, getPosterByPosterId } from '../../../service/AccountService';
import Swal from 'sweetalert2';

const PosterLoad = ({ props }) => {

    const { listPoster, setListPoster, account } = props;
    console.log(listPoster);
    function confirmHandle(status, data) {
        Swal.fire({
            title: "Bạn chắc chắn muốn " + status + " chứ ?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Đồng ý",
            cancelButtonText: "Hủy bỏ",

        }).then((result) => {
            if (result.isConfirmed) {
                if (status === 'delete') handleDeletePoster(data)
            }
        });
    }

    async function handleDeletePoster(posterId) {
        console.log(posterId);
        const response = await deletePoster(posterId)
        console.log(response);
        if (response.status === 200) loadPoster()
    }
    async function loadPoster() {
        const response = await getAllPoster(account.id);
        setListPoster(response.data)
    }
    async function handleLike(posterId, accountId) {
        console.log(posterId);
        console.log(accountId);
        const likeDTO = {
            posterId: posterId,
            accountId: accountId
        }
        console.log(likeDTO)
        const response = await createLike(likeDTO)
        console.log(response);

        if (response.status === 200) loadPoster()
    }

    function handleUpdatePoster(posterId) {
        console.log(1);
      }
    return (
        listPoster?.map((value) =>
            <Card className='mt-3' key={value.posterId}>
                <Card.Title className='flex m-2 pb-2 relative'>
                    <MdAccountCircle size={60} />
                    <div className='mt-2 ms-2 flex justify-between w-full'>
                        <div className='mb-1'>
                            <Card.Text className='m-0'>
                                {account.firstName + ' ' + account.lastName}
                            </Card.Text>
                            <h6>{value.premiereDate}</h6>
                        </div>
                        <Dropdown>
                            <Dropdown.Toggle variant="none" id="dropdown-basic">
                                {/* <HiDotsHorizontal size={18} /> */}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <button
                                        onClick={() => handleUpdatePoster(value.posterId)}
                                        name='updatePoster'
                                        type="submit"
                                        className="flex w-full items-center gap-2 rounded-lg hover:bg-red-50"
                                        role="menuitem"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                            />
                                        </svg>
                                        Chỉnh sửa bài viết
                                    </button>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <button
                                        onClick={() => confirmHandle("delete", value.posterId)}
                                        name='deletePoster'
                                        type="submit"
                                        className="flex w-full items-center gap-2 rounded-lg hover:bg-red-50"
                                        role="menuitem"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            />
                                        </svg>
                                        Xóa bài viết
                                    </button>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Card.Title>
                <Card.Body className='relative border-b-2 mb-3 p-0'>
                    <Container>
                        <Card.Title>
                            {value.description}
                        </Card.Title>
                        <a href='' className='text-black'>
                            {value.accountLike.length != 0 ? + value.accountLike.length + ' like' : ""}
                        </a>
                    </Container>
                    <div className='relative flex justify-between border-t-2 py-1 w-full'>
                        <Button onClick={() => handleLike(value.posterId, account.id)} variant='none' className='w-full'>
                            <div className='w-full flex justify-center align-items-center'>
                                <AiOutlineLike size={25} className='me-2' />
                                <p className='m-0'>Like</p>
                            </div>
                        </Button>
                        <Button
                            // href={'#comment' + value.posterId}
                            variant='none'
                            className='w-full'
                        >
                            <div className='w-full flex justify-center align-items-center'>
                                <AiOutlineMessage size={25} className='me-2' />
                                <p className='m-0'>Bình luận</p>
                            </div>
                        </Button>
                        <Button onClick={() => handleCopy(value.posterId, account.id)} variant='none' className='w-full'>
                            <div className='w-full flex justify-center align-items-center'>
                                <IoMdCopy size={25} className='me-2' />
                                <p className='m-0'>Sao chép</p>
                            </div>
                        </Button>
                    </div>
                </Card.Body>
                <CommentLoad props={{ value, account, setListPoster }} />
            </Card>
        )
    )
}
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
export default PosterLoad
