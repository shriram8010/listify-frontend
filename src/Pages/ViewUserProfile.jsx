import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/nav";
import { useState,useEffect } from "react";
import { updateUser, userDetail } from "../Service/User";
import { toast } from "react-toastify";

export default function ViewUserProfile() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const id = parseInt(localStorage.getItem("id"));

    useEffect(() => {
        getUser()
    }, []);

    async function getUser() {
        const result=await userDetail()
        setFirstName(result.firstName)
        setLastName(result.lastName)
        setAddress(result.address)
        setEmail(result.email)
        setPhone(result.phone)
    }

    async function onSaveChanges() {
        const result=await updateUser(id,firstName,lastName,email,address,phone);
        console.log(result);
        if(result==null){
            
        }
        else{
            toast.success('User updated')
            onlogout()
        }
    }

    function onlogout() {
        
        localStorage.clear()
        navigate("/");
    }
    return (
        <div>
            <Nav />

            <div className="container flex mx-5 my-10  ">
                <div className="" style={{ width: "20%" }}>
                    <h1 className="p-5">Edit Profile</h1>
                    <div className="p-5">
                        <Link to="./ProfilePicture">Profile Picture</Link>
                    </div>
                    <div className="p-5">
                        <Link to="./Profile">View Profile</Link>
                    </div>
                </div>
                <div className="" style={{ width: "70%" }}>
                    <span className="text-2xl my-10">Edit Profile</span>
                    <hr></hr>
                    <div className=" grid">
                        <h4 className="text-2xl py-3 ">Basic Information</h4>
                        <input
                            type="text"
                            placeholder="First Name "
                            value={firstName}
                            className=" border border-gray-300 rounded-md px-3 py-2 my-2"
                            onChange={(e) => {
                                
                                setFirstName(e.target.value);
                            }}
                        ></input>
                        <input
                            type="text"
                            placeholder="Last Name "
                            value={lastName}
                            className=" border border-gray-300 rounded-md px-3 py-2 my-2"
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                        ></input>
                        <textarea
                            placeholder="Address"
                            value={address}
                            className="my-2  border border-gray-300 rounded-md px-3 py-2"
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }}
                        ></textarea>
                    </div>
                    <hr></hr>
                    <div className=" grid">
                        <h4 className="text-2xl my-3">Contact information</h4>
                        <input
                            type="text"
                            value={phone}
                            placeholder="Phone Number"
                            className="border border-gray-300 rounded-md px-3 py-2"
                            onChange={(e) => {
                                setPhone(e.target.value);
                            }}
                        ></input>
                        <input
                            type="text"
                            value={email}
                            placeholder="Email"
                            className="mt-5 my-5 border border-gray-300 rounded-md px-3 py-2"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        ></input>
                    </div>
                    <hr></hr>
                    <div className=" grid">
                        <h4 className="text-2xl my-3 my-10 ">Additional Information</h4>
                    </div>
                    <hr></hr>
                    <div className=" ">
                        <button
                            type="submit"
                            className="border  rounded-md px-3 py-2 m-3 border-sky-700   border-solid border-2 text-white  bg-sky-700  hover:bg-white  hover:text-black transition ease-in-out duration-500 " onClick={onSaveChanges}
                        >
                            Save Changes
                        </button>

                        <button
                            type="submit"
                            className="border rounded-md px-3 py-2 my-3 border-red-500    border-solid border-2 text-white  bg-red-500 hover:bg-white hover:text-black transition ease-in-out duration-500  "
                            onClick={onlogout}
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
