"use client";

import { useState, useEffect } from "react";
import {codeSnippet, CodeBlock} from "./codesnippet";

function APIUpdateForm() {
  const [increment, setIncrement] = useState(0);
  const [name, setName] = useState("");
  const updateIncrement = () => setIncrement(increment + 1);

  useEffect(() => {
    const fetchData = async () => {
      const dataFetched = await fetch(
        "https://fakerapi.it/api/v1/persons?_locale=en_US&_quantity=2"
      );
      const res = await dataFetched.json();
      setName(`${res.data[0].firstname} ${res.data[0].lastname}`);
    };
    fetchData();
  }, [increment]);
  
  

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="max-w-25 align-middle bg-[#90cc75] py-4 mt-4">
        <h1 className="text-4xl text-center underline">
          useEffect Hook Functionality on API Data Update
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="flex flex-col w-1/2 bg-[#90cc75] rounded-lg shadow-lg p-8 m-4">
          <h2 className="text-2xl font-bold mb-4">
            Update State with API Data
          </h2>
          <div className="mt-2">
            <p>
              API Data Received:
              <span className="font-bold ml-2 text-blue-600">{name}</span>
            </p>
            <p className="mb-4">
              Data updated after each click.
              <span className="font-bold ml-2 text-green-800">
                Data count: {increment}
              </span>
            </p>
          </div>
          <p className="mb-4 text-gray-800 bg-blue-300">
            Data will update as useEffect senses a change in increment function.
          </p>
          <p className="mb-1">
            Click the button to update the state with data from an API.
          </p>
          <button
            onClick={updateIncrement}
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update State
          </button>
        </div>
        <div className="mt-8 mb-4">
          <h2 className="text-2xl font-bold mb-4">Code Snippet of React Hooks Used:</h2>
          <CodeBlock code={codeSnippet} />
        </div>
      </div>
    </div>
  );
}

export default APIUpdateForm;
