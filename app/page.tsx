'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { baseUrl } from "./utils/constants";
import axios from 'axios';
import Loader from "./components/Loader";
import postData from "./utils/postData";

export default function Home() {

  const [textareatext, setTextAreaText] = useState('');
  const [showLoader, setIsShowLoader] = useState(false);

  const router = useRouter()


  async function sendData() {
    const dataToSend = {
      'text': textareatext,
    };
  
    try {
      const responseData = await postData(dataToSend);
      console.log('Received response:', responseData);
      localStorage.setItem('key', JSON.stringify(responseData));
      setIsShowLoader(false);
      router.push(
          '/about'
      )
      // Handle the response data as needed
    } catch (error) {
      console.error('Error sending data:', error);
      setIsShowLoader(false);
      // Handle errors if needed
    }
  }
  

  const handleUpload = async () => {

    console.log(textareatext)




    setIsShowLoader(true);
    //   const myobj = {
    //     "sentimant_result": [
    //       {
    //         "label": "NEGETIVE",
    //         "score": 99.0
    //       }
    //     ],
    //     "sucide_predection": {
    //       "prediction":"sucide",
    //       "level":"level3"
    //     }
    // };

    //   localStorage.setItem('key', JSON.stringify(myobj));
    //   setTimeout(() => { 
    //     router.push(
    //     '/about',
    //   )
    //   setIsShowLoader(false);
    // }, 3000);

  //   var data = {
  //     'text': textareatext,

  // }

    sendData()

  //   var data = {
  //     'text': textareatext,

  // }

  //   axios.post(baseUrl + '/app/suicide-detection/', {
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Methods': 'POST',
  //       'Access-Control-Allow-Credentials':'true'

  //     },
  //     data
  //   })
  //     .then(function (response) {
  //       console.log(response);
  //       localStorage.setItem('key', JSON.stringify(response));
  //       setIsShowLoader(false);
  //       router.push(
  //         '/about',
  //       )
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       setIsShowLoader(false);
  //     });


    // fetch(baseUrl + '/app/suicide-detection/', {
    //       method: 'POST',
    //       headers: {
    //           'Content-type': 'application/json',
    //       },
    //       body: JSON.stringify({  text: textareatext }),
    //   })
    //       .then((response) => response.json())
    //       .then((data) => {
    //           console.log(data);
    //           localStorage.setItem('key', JSON.stringify(data));
    //   setIsShowLoader(false);
    //   router.push(
    //     '/about',
    //   )
    //       })
    //       .catch((error) => {
    //           console.error(error);
    //       });


  };


  const msgChange = (e: any) => {
    const value = e.target.value;
    setTextAreaText(value);

  };


  return (
    <main>

      <div className="p-4 py-8 flex-col h-screen">
        {showLoader && <Loader />}
        <div className="heading text-center font-bold text-2xl mb-20 text-gray-800 pb-15">There is little evidence that death by suicide can be predicted or prevented </div>

        <div className="flex  justify-center pt-10 pl-20">
          <textarea className=" bg-gray-100 w-96 h-56 resize-noneoutline-none border border-gray-300 outline-none text-black p-3" spellCheck="false" placeholder="Describe everything about sucide" onChange={msgChange}></textarea>
        </div>

        <div className="flex justify-center pl-20 pt-10">
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleUpload} >Submit</button>
        </div>
      </div>
    </main>
  );
}
