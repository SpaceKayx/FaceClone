import React, { useState } from 'react'
import { createAccount } from '../service/RegisterService'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'

const Register = () => {
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState({})
    const [gender, setGender] = useState("")
    const navigate = useNavigate()

    function showPassword() {
        const showPassword = document.getElementsByClassName('inputPassword')
        showPassword.type === 'password'
            ?
            showPassword.setAttribute('type', 'text')
            :
            showPassword.setAttribute('type', 'password')
    }
    function handleOnSubmit() {
        console.log(0);
        if (password.pass == password.confirmPassword) {
            const account = {
                lastName,
                firstName,
                username,
                email,
                password: password.confirmPassword,
                gender
            }
            console.log(2);
            createAccount(account).then((resp) =>{
                console.log(resp);
                const success = Swal.fire({
                    title: "Đăng ký thành công",
                    icon: "success"
                  });
                  if(success){
                      navigate("/login")
                  }
            }).catch(error =>{
                console.error(error);
            })
        }
        else{
            console.log(1);
        }
    }
    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">FaceClone</h1>

                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                        FaceClone giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
                    </p>

                    <form action="" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                        <p className="text-center text-lg font-medium">Đăng ký</p>

                        <div className='mt-8 grid grid-cols-6 gap-6'>
                            <div className='col-span-6 sm:col-span-3'>
                                <label htmlFor="lastname" className="sr-only">Họ</label>
                                <div className="relative">
                                    <input
                                        onChange={(e) => setLastName(e.target.value)}
                                        type="text"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Họ"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='col-span-6 sm:col-span-3'>
                                <label htmlFor="firstname" className="sr-only">Tên</label>
                                <div className="relative">
                                    <input
                                        onChange={(e) => setFirstName(e.target.value)}
                                        type="text"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Tên"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="username" className="sr-only">Tên đăng nhập</label>
                            <div className="relative">
                                <input
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Tên đăng nhập"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <div className="relative">
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Email"
                                    required
                                />
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-gray-400">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Mật khẩu</label>
                            <div className="relative">
                                <input
                                    onChange={(e) => setPassword({ ...password, pass: e.target.value })}
                                    type="password"
                                    className="inputPassword w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Mật khẩu"
                                    required
                                />
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4" onClick={showPassword}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="sr-only">Xác nhận mật khẩu</label>
                            <div className="relative">
                                <input
                                    onChange={(e) => setPassword({ ...password, confirmPassword: e.target.value })}
                                    type="password"
                                    className="inputPassword w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Xác nhận mật khẩu"
                                    required
                                />
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4" onClick={showPassword}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <fieldset className="grid grid-cols-2 gap-4 h-[4rem]">
                            <div className='h-full'>
                                <label
                                    className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-3 px-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                                >
                                    <div>
                                        <p className="text-gray-700">Nam</p>
                                    </div>

                                    <input
                                        onChange={() => setGender("true")}
                                        name="gender"
                                        type="radio"
                                        id="DeliveryStandard"
                                        className="size-5 border-gray-300 text-blue-500"
                                    />
                                </label>
                            </div>

                            <div className='h-full'>
                                <label
                                    htmlFor="DeliveryPriority"
                                    className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-3 px-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                                >
                                    <div>
                                        <p className="text-gray-700">Nữ</p>
                                    </div>

                                    <input
                                        onChange={() => setGender("false")}
                                        type="radio"
                                        name="gender"
                                        value="false"
                                        id="DeliveryPriority"
                                        className="size-5 border-gray-300 text-blue-500"
                                    />
                                </label>
                            </div>
                        </fieldset>
                        <button
                            onClick={handleOnSubmit}
                            type="submit"
                            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white" >
                            Đăng ký
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            Bạn đã có tài khoản ?
                            {/* <Link */}
                            <a className="underline" href="#">Đăng nhập</a>
                        </p>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Register
