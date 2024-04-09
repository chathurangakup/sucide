'use client'

import React, { useEffect, useState } from 'react';



const page = () => {
  // const [resultLbl, setResultLbl] = useState('');
  // const [resultScore, setResultScore] = useState(0);

  // const [sucidePredictionLvl, setSucidePredictionLevel] = useState('');
  // const [sucideResult, setSucideResult] = useState('');

  // useEffect(() => {
  //   // localStorage.getItem('username');
  //   // console.log("usretname"+ localStorage.getItem('username'))
  //   let data = JSON.parse(localStorage.getItem('key') || '{}');
  //   console.log(data)
  //   setResultLbl(data?.sentimant_result[0]?.label);
  //   setResultScore(data?.sentimant_result[0]?.score)
  //   setSucidePredictionLevel(data?.sucide_predection?.level)
  //   setSucideResult(data?.sucide_predection?.prediction
  //     )

  // }, [])


  return (
    <div>

      <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40 p-4">
        <div>
          <h3 className="text-3xl  text-white">Sentiment result</h3>
          {/* <h5 className="max-w-xl mt-3 font-bold text-white"> Lable: {resultLbl}</h5> */}
        </div>
      </div>
      <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40 mt-20 p-4">
        <div>
          <h3 className="text-3xl  text-white">Sentiment Score</h3>
          {/* <h5 className="max-w-xl mt-3 font-bold text-white">Score : {resultScore}</h5> */}
        </div>
      </div>
      <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40 mt-20 p-4">
        <div>
          <h3 className="text-3xl  text-white">Sucide prediction level</h3>
          {/* <h5 className="max-w-xl mt-3 font-bold text-white">Level : {sucidePredictionLvl}</h5> */}
        </div>
      </div>
      <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40 mt-20 p-4">
        <div>
          <h3 className="text-3xl  text-white">Sucide prediction</h3>
          {/* <h5 className="max-w-xl mt-3 font-bold text-white">Prediction : {sucideResult}</h5> */}
        </div>
      </div>

    </div>
  )
}

export default page