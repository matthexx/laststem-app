"use client"
import Link from "next/link"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"


export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    // let TOKEN = '7|PK7BXfsrx8aDUcb2rPEWI2oi9Mrae6fFM1VeIDi57f786127'

    const onLogin = async (e) => {
        e.preventDefault(); // Prevent the form from submitting
        try {
            setLoading(true);
            attemptLogin(user)
        } catch (error) {
            handleErrors(errror)
        } finally {
            setLoading(false);
        }
    };


    // attempt login 
    function attemptLogin(user) {
        const headers = {
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${TOKEN}`
            }
        };
        const apiURL = 'http://127.0.0.1:8000';

        // axios.post("/api/users/login", user);
        // added code for testing api
        axios.get(apiURL + '/sanctum/csrf-cookie', headers)
            .then(response => {

                // nextjs code starts here
                axios.post(apiURL + "/api/login", user, headers)
                    .then(res => {
                        console.log('credentials submitted', user,
                            'lara api response', res.data.datalid.token + 'is a logedin member');

                            // check for response data from api call
                        if ($datalid = res.data.datalid) {

                            router.push("/dashboard/profile/" + $datalid.user.id
                            // {
                            //     user : $datalid.user
                            // }
                            );
                            console.log(datalid.status);
                        }

                    }).catch(er => {
                        console.log("Login Failed", error.message);
                    })

                    // next js ends here
            }).catch(er => {
                console.log("Login Failed", error.message);
            })
        console.log(user.email, user.password, user);
        // console.log("Login successful");
        // Redirect to the profile page
        // router.push("/dashboard/profile");
    }

    // handle errors
    function handleErrors(error) {
        console.log("Login Failed", error.message);

        // added this code for debugging errors from the login api request
        if (error.response) {
            // Request made but the server responded with an error
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // Request made but no response is received from the server.
            console.log(error.request);
        } else {
            // Error occured while setting up the request
            console.log('Error', error.message);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user])

    return (
        <div className="flex min-h-full flex-1 flex-row px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src=""
                // alt="Last STEM"
                />
                <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                    {loading ? "Processing" : "Login to your account"}
                </h2>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
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
                                    onChange={(e) => setUser({
                                        ...user, email: e.target.value
                                    })}
                                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
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
                                    onChange={(e) => setUser({
                                        ...user, password: e.target.value
                                    })}
                                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button onClick={onLogin}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Signup for a trial session{' '}
                        <Link href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Signup
                        </Link>
                    </p>
                </div>
            </div>

        </div>

    )

}