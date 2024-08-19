import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Product from "./components/Product";

export default function App() {
  const [products, setProduct] = useState([
    {
      id: 1,
      title: "hello",
      price: "20",
      taxes: "1",
      ads: "1",
      discount: "1",
      total: "1",
      count: "1",
      category: "1",
    },
  ]);
  const [formData, setFormData] = useState({
    id: products.length,
    title: "",
    price: "",
    taxes: "",
    ads: "",
    discount: "",
    count: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleCreateProduct = () => {};

  const handleDelete = () => {
    console.log("deleted");
  };
  const handleEdit = () => {};

  return (
    <div className="grid lg:justify-center gap-0 p-4 lg:w-full lg:items-center lg:py-12 bg-[#262626] lg:text-center text-slate-50">
      <div className="grid lg:gap-0 gap-2">
        <h1 className="font-bold uppercase text-3xl text-teal-500">Cruds</h1>
        <h2 className="font-semibold uppercase text-gray-200">
          product system managment
        </h2>
      </div>
      <Form
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
      <div className="lg:bg-[#000000] grid gap-4 rounded lg:p-12 m-6 mx-2">
        <div className="lg:flex grid gap-2 justify-between items-center  border-b pb-4 border-gray-600">
          <h1 className="text-2xl font-semibold text-teal-500">Products</h1>
          <div>
            <form className="lg:flex grid gap-3 lg:gap-3 items-center">
              <input
                className="border bg-black border-gray-500 rounded p-2"
                placeholder="search ..."
              />
              <div className="flex gap-3 items-center">
                <button className="border border-pink-800 hover:bg-gray-900 rounded text-white p-2">
                  title
                </button>
                <button className="border border-teal-600 hover:bg-gray-900 rounded text-white p-2">
                  category
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table cellPadding={8} className="min-w-full">
            <thead>
              <tr className="lg:uppercase text-gray-200">
                <th>id</th>
                <th>title</th>
                <th>price</th>
                <th>taxes</th>
                <th>ads</th>
                <th>discount</th>
                <th>total</th>
                <th>category</th>
                <th>update</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {products.map((item, index) => {
                return (
                  <Product
                    key={index}
                    product={item}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
