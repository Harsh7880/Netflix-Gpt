import React, { useEffect, useRef } from 'react'
import { BACKGROUND_IMAGE,API_KEY } from '../utils/constants'
import { useSelector } from 'react-redux'
import  languageConstant from '../utils/languageConstant'
import {GoogleGenerativeAI} from '@google/generative-ai'


const GPTSeachBar = () => {

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const searchQuestion = useRef("");

  useEffect(() => {
    handleSuggestMovies();
  }, []);

  const handleSuggestMovies = async () => {
    try {
      const result = await model.generateContent(searchQuestion.current.value);
      console.log(result.response.text());
      return result.response.text();
    } catch (err) {
      console.log(err);
    }
  };

  const language = useSelector((store) => store.config.lang);

  return (
    <div className="flex justify-center  p-3">
      <div className="absolute mt-0 -z-10">
        <img src={BACKGROUND_IMAGE} alt="backgound" />
      </div>
      <div className="bg-black w-1/2 p-5 grid grid-cols-12 mt-[10%]">
        <input
          ref={searchQuestion}
          type="text"
          placeholder={languageConstant[language].placeholder}
          className="col-span-9 p-2 mr-2 outline-0"
        />
        <button onClick={handleSuggestMovies} className="bg-red-600 px-6 py-2 rounded col-span-3 text-white">
          {languageConstant[language].search}
        </button>
      </div>
    </div>
  );
}

export default GPTSeachBar