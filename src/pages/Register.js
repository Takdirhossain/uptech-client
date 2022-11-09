import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { MainContext } from '../contex/AuthContex';



const Register = () => {
    const {  singupwithEmail } = useContext(MainContext)
    const [error, setError] = useState('')
    const handaleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        
        const email = form.email.value
        const password = form.password.value
        singupwithEmail(email, password)
            .then(result => {

                Swal.fire(
                    'congratulations!',
                    'Registation success!',
                    'success'
                )
                form.reset()
                setError('')
            })
            .catch(error => {
                setError(error.message)
                console.log(error)
            })

    }
    return (
        <div>
            <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div
                                className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]"
                            >
                                <div className="mb-10 text-center md:mb-16">
                                    <Link

                                        className="mx-auto inline-block max-w-[160px]"
                                    >
                                        <h2 className='text-4xl font-bold'>SingUp</h2>
                                    </Link>
                                </div>
                                <form onSubmit={handaleSubmit} >
                                    <div className="mb-6">
                                        <input name='name'
                                            type="text"
                                            placeholder="Name"
                                            className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input name='email'
                                            type="email"
                                            placeholder="Email"
                                            className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input name='password'
                                            type="password"
                                            placeholder="Password"
                                            className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                        />
                                    </div>
                                    <div className="mb-10">

                                        <button className="btn bg-blue bordder-primary w-full cursor-pointer rounded-md border bg-silver py-3 px-5 text-base text-white transition hover:bg-opacity-90 font-bold">Register</button>
                                    </div>
                                    <p className='text-dark'>{error }</p>
                                </form>

                                <p className="text-base text-[#adadad]">
                                    Have an Account?
                                    <Link to='/login' className="text-primary hover:underline">
                                        Login
                                    </Link>
                                </p>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Register;