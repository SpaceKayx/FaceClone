import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { MdAccountCircle } from "react-icons/md";
import { IoMdImages } from "react-icons/io";
import { MdPersonAddAlt1 } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdCopy } from "react-icons/io";
import "../../css/aside.scss"
import Button from 'react-bootstrap/esm/Button';
import Swal from 'sweetalert2'
import { createComment, createLike, createPoster, getListCommentByPosterId } from '../../service/AccountService';
import { Container, Dropdown } from 'react-bootstrap';
import PosterLoad from './load/PosterLoad';
import CreatePosterLoad from './load/CreatePosterLoad';

const Aside = ({ props }) => {

  const { account } = props
  const [listPoster, setListPoster] = useState([])
  useEffect(() => {
    if (account.id) {
      setListPoster(account.accountPoster);
      console.log(account, "Aside");
      console.log(listPoster, "Aside listPoster");
    }
  }, [account])
  return (
    <aside className="col-6 mt-2 aside_content" >
      <CreatePosterLoad props={{account, setListPoster}}/>
      <PosterLoad props={{listPoster, setListPoster, account}}/>
    </aside>

  )
}
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

export default Aside
