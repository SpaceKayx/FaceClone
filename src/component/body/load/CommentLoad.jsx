import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { MdAccountCircle } from 'react-icons/md'
import { createComment, getAllPoster } from '../../../service/AccountService'
import Swal from 'sweetalert2'

const CommentLoad = ({ props }) => {
    const { value, account, setListPoster } = props
    const [getComment, setComment] = useState('')

    async function handleCreateComment(posterId, accountId) {
        const infoComment = getInfoComment(posterId, accountId)
        if (infoComment) {
            const response = await createComment(infoComment)
            console.log(response);
            if (response.status === 201) {
                loadPoster()
                setComment('')
            }
        }
    }
    const getInfoComment = (posterId, accountId) => {
        if (getComment === '') {
            notify("Không thể đăng bình luận", "Vui lòng kiểm tra lại bình luận !!", "error")
            return;
        }
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
        return postComment;
    }
    function notify(title, description, icon) {
        Swal.fire({
            title: title,
            text: description,
            icon: icon
        });
    }
    async function loadPoster() {
        const response = await getAllPoster(account.id);
        setListPoster(response.data)
    }
    return (
        <Card.Footer className='bg-white'>
            {
                value?.accountComment.map((comment) =>
                    <div className='flex justify-start py-2' key={comment.commentId}>
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
                    value={getComment}
                    name='comment'
                    // id={`comment`}
                    placeholder="Viết bình luận"
                    className="w-full rounded-md border border-gray-200 p-2.5 mx-2 shadow-sm sm:text-sm"
                />
                <Button onClick={() => handleCreateComment(value.posterId, account.id)}>Đăng</Button>
            </div>
        </Card.Footer>
    )
}

export default CommentLoad
