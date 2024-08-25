import React, { useEffect, useState } from 'react'
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
import { createComment, createLike, createPoster, getListCommentByPosterId } from '../service/AccountService';
import { Container, Dropdown } from 'react-bootstrap';




const Aside = ({ props }) => {

  const { account } = props
  const [description, setDescription] = useState('')
  const [getComment, setComment] = useState('')
  const [listPoster, setListPoster] = useState([])
  useEffect(() => {
    if (account.id) {
      setListPoster(account.accountPoster);
      console.log(account, "Aside");
      console.log(listPoster, "Aside listPoster");
    }
  }, [account])
  function Notify(title, description, icon) {
    Swal.fire({
      title: title,
      text: description,
      icon: icon
    });
  }
  function confirmHandle(status) {
    Swal.fire({
      title: "Bạn chắc chắn muốn " + status +" chứ ?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý",
      cancelButtonText: "Hủy bỏ",

    }).then((result) => {
      if (result.isConfirmed) {
        Notify(status + " thành công !!", null, "success")
        console.log("hihi");
        return true;
      }
      return false;
    });
  }
  // function loadPoster() {
  //   getAllPoster(account.id)
  //     .then((resp) => {
  //       console.log(resp);
  //       setListPoster(account.accountPoster);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }

  function handleCreatePoster(e) {
    e.preventDefault()
    if (description != '') {
      const poster =
      {
        description: description,
        accountId: {
          accountId: account.id
        },
        premiereDate: new Date()
      }
      createPoster(poster)
        .then((resp) => {
          console.log(resp);
          if (resp.status === 201)
            window.location.reload()
        })
        .catch(error => {
          console.log(error);
        })
    }
    else {
      Notify("Không thể đăng trạng thái","Vui lòng nhập trạng thái !!","error")
    }
  }
  function handleDeletePoster(posterId) {
    // confirm() = () => confirmHandle("Delete")
    // console.log(confirm);
    // if(confirmHandle("Delete") == true)
    //   console.log(1);
    // else
    // {
    //   console.log(0);
    // }
  }
  function handleUpdatePoster(posterId) {
    console.log(1);
  }
  function handleCreateComment(posterId, accountId) {
    console.log(getComment);
    console.log(posterId);
    console.log(accountId);
    const postComment =
    {
      "accountPoster": {
        "posterId": posterId
      },
      "account": {
        "accountId": accountId
      },
      "description": getComment
    }
    createComment(postComment)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      })
    console.log(getComment);
  }
  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleCreatePoster(event)
    }
  }
  function handleLike(posterId, accountId) {
    console.log(posterId);
    console.log(accountId);
    const likeDTO = {
      "posterId": posterId,
      "accountId": accountId
    }
    createLike(likeDTO)
      .then((resp) => {
        console.log(resp);
        // loadPoster();
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <aside className="col-6 mt-2 aside_content" >
      <Card>
        <Card.Title className='flex m-2 border-b-4 pb-2 align-items-center'>
          <MdAccountCircle size={60} />
          <input
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={handleEnter}
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
      {
        listPoster.map((value, index) =>
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
                        onClick={() => handleDeletePoster(value.posterId)}
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
                <Button href={'#comment' + index} variant='none' className='w-full'>
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
            <Card.Footer className='bg-white'>
              {
                value.accountComment.map(comment =>
                  <div className='flex justify-start py-2'>
                    <MdAccountCircle size={40} color='gray' />
                    <div className='ms-2 px-3 bg-[#eaeaea] rounded-e-2xl rounded-s-2xl !min-w-16 !min-h-10 '>
                      <Card.Text className='m-0 font-semibold'>
                        {account.firstName + ' ' + account.lastName}
                      </Card.Text>
                      <small>{comment.description}</small>
                    </div>
                  </div>
                )
              }
              <div className='flex justify-between'>
                <MdAccountCircle size={40} color='gray' />
                <input
                  onChange={(e) => setComment(e.target.value)}
                  type="text"
                  name='comment'
                  id={'comment' + index}
                  placeholder="Viết bình luận"
                  className="w-full rounded-md border border-gray-200 p-2.5 mx-2 shadow-sm sm:text-sm"
                />
                <Button onClick={() => handleCreateComment(value.posterId, account.id)}>Đăng</Button>
              </div>
            </Card.Footer>
          </Card>
        )
      }
    </aside>
    
  )
}
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

export default Aside
