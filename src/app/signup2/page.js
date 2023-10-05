"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = useState(false);
    // const onSignup = async () => {
    //   try {
    //     setLoading(true);
    //     const response = await axios.post("/api/users/signup", user);
    //     console.log(response.data);
    //     //   toast.success("Signup Success");
    //     return router.push("/login");
    //   } catch (error) {
    //     // toast.error(error.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // };


    // new sign in functionality



    const onSignup = async () => {
        try {
            setLoading(true);

            attemptSignUp(user);

        } catch (error) {
            console.log("Registration Failed", error.message);

            // added this code for debugging errors from the login api request
            if (error.response) {
                console.log('error in response');
                // Request made but the server responded with an error
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // Request made but no response is received from the server.
                console.log('erorr in request', error.request);
            } else {
                // Error occured while setting up the request
                console.log('Error here', error);
            }
        } finally {
            setLoading(false);
        }
    };


    function attemptSignUp() {
        const headers = {
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${TOKEN}`
            }
        };
        const apiURL = 'http://127.0.0.1:8000';

        axios.get(apiURL + '/sanctum/csrf-cookie', headers)
            .then(response => {
                axios.post(apiURL + "/api/register", user, headers)
                    .then(res => {
                        console.log('credentials submitted', user);
                        if (res.data.datalid) {
                            let datalid = res.data.datalid
                            // console.log('lara reg api says: ', res, res.data.data.token + 'is a new member')
                            console.log('lara reg api says: ', res,
                                'res.data ', res.data,
                                'res.data.status', res.data.status,
                                'res.data.datalid.user', ('user obj', datalid.user, datalid.user.name), 'is a new2 member')
                            // console.log('lara reg api says: ',res.status,  JSON.parse(res.data.data.user) + 'is a newly member')
                            // router.push("/dashboard/profile");
                            router.push("/dashboard/profile/" + datalid.user.id)

                        }

                    })
            });
        // return router.push("/login");
    }

    useEffect(() => {
        if (
            user.email.length > 0 &&
            user.password.length > 0 &&
            user.username.length > 0
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex min-h-full flex-1 flex-row px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src=""
                // alt="Last STEM"
                />
                <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                    {loading ? "Processing..." : "Sign up to create your account"}
                </h2>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                User Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    placeholder="username"
                                    required
                                    value={user.username}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            username: e.target.value,
                                        })
                                    }
                                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    required
                                    value={user.email}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            email: e.target.value,
                                        })
                                    }
                                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a
                                        href="/"
                                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    required
                                    value={user.password}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            password: e.target.value,
                                        })
                                    }
                                    className="block w-full  px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={onSignup}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {buttonDisabled ? "Can't wait!" : "Signup here"}
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
