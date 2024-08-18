import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="grid lg:justify-center gap-4 p-4 lg:w-full lg:items-center lg:py-12 bg-[#262626] lg:text-center text-slate-50">
      <div className="grid lg:gap-0 gap-2">
        <h1 className="font-bold uppercase text-3xl text-orange-600">Cruds</h1>
        <h2 className="font-semibold uppercase text-gray-200">
          product system managment
        </h2>
      </div>
      <form className="lg:w-full grid gap-3 lg:shadow lg:p-6">
        <input
          type="text"
          className="bg-black p-2 rounded"
          placeholder="title"
        />
        <div className="lg:flex grid grid-cols-2 gap-2 gap-y-1 items-center">
          <input
            type="text"
            className="bg-black p-2 rounded"
            placeholder="price"
          />
          <input
            type="text"
            className="bg-black p-2 rounded"
            placeholder="taxes"
          />
          <input
            type="text"
            className="bg-black p-2 rounded"
            placeholder="ads"
          />
          <input
            type="text"
            className="bg-black p-2 rounded"
            placeholder="discount"
          />
          <p className="text-orange-500">
            Total : <span className="underlane font-semibold">$30</span>
          </p>
        </div>
        <input
          type="text"
          className="bg-black p-2 rounded"
          placeholder="count"
        />
        <input
          type="text"
          className="bg-black p-2 rounded"
          placeholder="category"
        />
        <button className="bg-orange-700  p-2 hover:bg-opacity-90 text-white rounded text-center">
          create
        </button>
      </form>
      <div className="lg:bg-[#000000] rounded lg:p-12">
        <div className="lg:flex grid gap-2 justify-between items-center  border-b pb-4 border-gray-600">
          <h1 className="text-2xl font-semibold text-orange-500">Products</h1>
          <div>
            <form className="flex gap-2 lg:gap-3 items-center">
              <input
                className="border bg-black border-gray-500 rounded p-2"
                placeholder="search ..."
              />
              <span>By :</span>
              <button className="border border-yellow-800 hover:bg-gray-900 rounded text-white p-2">
                title
              </button>
              <button className="border border-yellow-600 hover:bg-gray-900 rounded text-white p-2">
                category
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
