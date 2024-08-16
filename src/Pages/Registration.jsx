import React, { useState } from 'react'
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from '../Service/User';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import Add from "../image/addAvatar.png";

export default function Registration() {

    const navigate=useNavigate()
    const [img,setImg]=useState('')
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[address,setAddress]=useState('')
    const[phone,setPhone]=useState('')
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);

    async function onRegisterUser(){
        setLoading(true);
        if(firstName.length==0){
            toast.warning('Enter first name')
        }
        else if(lastName.length==0){
            toast.warning('Enter last name')
        }
        else if(email.length==0){
            toast.warning('Enter email')
        }
        else if(password.length<6  ){
            toast.warning('Enter password greater then 6 character')
        }
        else if(address.length==0){
            toast.warning('Enter address')
        }
        else if(phone.length==0){
            toast.warning('Enter phone')
        }
        else{
            const result=await registerUser(firstName,lastName,email,password,address,phone);
            console.log(result.message);
            if(result.message=="User is added"){
                toast.success('User is register')
                navigate('/Login')
            }
        }

        const displayName = firstName+" "+lastName;
        const file = img;

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }

    }

  return (
    <div>
       <div className='px-5 py-2 fixed'>
                <Link to="/" className=" text-indigo-600 font-bold text-3xl " >Listify </Link>
        </div>
        <div className=' grid justify-center pt-10 '>
            <div className='border-2 rounded-[25px] shadow-2xl shadow-indigo-400 p-10 bg-gray-50'>
                <div className='pb-10 text-center font-bold text-indigo-600 text-2xl '>Registration</div>
                <div className='flex pb-5'>
                    <div className=' pr-2'>
                        <span className=' font-semibold'>First Name :</span><br />
                        <input type="text" className='border-2 border-gray-300 px-4 py-1 rounded-lg' onChange={(e)=>{
                            setFirstName(e.target.value)
                        }}/><br />
                    </div>
                    <div className='pl-2'>
                        <span className='font-semibold'>Last Name :</span><br />
                        <input type="text" className='border-2 border-gray-300 px-4 py-1 rounded-lg'  onChange={(e)=>{
                            setLastName(e.target.value)}}/><br />
                    </div>
                    
                </div>
        
        <div className='pb-5'>
            <span className='font-semibold'>Email :</span> <br />
            <input type="email" className='border-2 border-gray-300 w-[28rem] px-4 py-1 rounded-lg'  onChange={(e)=>{
                setEmail(e.target.value)}}/> <br />
        </div>

        <div className='pb-5'>
            <span className='font-semibold'>Password :</span> <br />
            <input type="password" className='border-2 border-gray-300 w-[28rem] px-4 py-1 rounded-lg' onChange={(e)=>{
                setPassword(e.target.value)}}/> <br />
        </div>
        
        <div className='pb-5'>
            <span className='font-semibold'>Address :</span> <br />
            <textarea name="" className='border-2 border-gray-300 w-[28rem] px-4 py-1 rounded-lg' id="" onChange={(e)=>{
                setAddress(e.target.value)}}></textarea><br />
        </div>

        <div className='pb-10'>
            <span className='font-semibold'>Phone No. :</span> <br />
            <input type="text" className='border-2 border-gray-300 w-[28rem] px-4 py-1 rounded-lg' onChange={(e)=>{
                setPhone(e.target.value)
            }}/> <br />
        </div>
        <div>
        <input required style={{ display: "none" }} type="file" id="file" onChange={(e)=>{setImg(e.target.files[0])}}/>
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
        </div>
        
        
        <div className=' flex justify-center'>
            <div className='text-center font-semibold mx-2'>
                <button className=' rounded-2xl bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2' onClick={onRegisterUser}>Register</button>
            </div>

            <div className='text-center font-semibold mx-2'>
                <button className=' rounded-2xl bg-orange-500 hover:bg-orange-700 text-white px-4 py-2' type='reset'>Reset</button>
            </div>
        </div>

        </div>

        </div>
    </div>
  )
}
