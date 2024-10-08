import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Product from "./components/Product";
import { FaSearch } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

export default function App() {
  const [products, setProducts] = useState(() => {
    const savedData = localStorage.getItem("data");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [formData, setFormData] = useState({
    id: 1,
    title: "",
    taxes: "",
    discount: "",
    ads: "",
    category: "",
    count: "",
    total: "",
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateProduct();
  };

  const handleCreateProduct = () => {
    const newProduct = {
      id: selectedItem
        ? selectedItem.id
        : products.length
        ? Math.max(...products.map((product) => product.id)) + 1
        : 1,
      title: formData.title,
      taxes: formData.taxes,
      category: formData.category,
      ads: formData.ads,
      count: formData.count,
      discount: formData.discount,
      total:
        Number(formData.taxes) +
        Number(formData.ads) +
        Number(formData.discount) +
        Number(formData.price),
      price: formData.price,
    };
    if (selectedItem) {
      const updatedItem = products.map((product) =>
        product.id === selectedItem.id ? newProduct : product
      );
      setProducts(updatedItem);
      setFilteredProducts(updatedItem);
      setSelectedItem(null);
    } else {
      setProducts([...products, newProduct]);
      setFilteredProducts([...products, newProduct]);
    }

    setFormData({
      id: products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1,
      title: "",
      price: "",
      taxes: "",
      ads: "",
      discount: "",
      count: "",
      category: "",
      total: "",
    });
  };

  const handleEdit = (id) => {
    const itemEdited = products.find((i) => i.id === id);
    if (itemEdited) {
      setFormData({
        id: products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1,
        title: itemEdited.title,
        taxes: itemEdited.taxes,
        category: itemEdited.category,
        ads: itemEdited.ads,
        count: itemEdited.count,
        discount: itemEdited.discount,
        total:
          Number(itemEdited.taxes) +
          Number(itemEdited.ads) +
          Number(itemEdited.discount) +
          Number(itemEdited.price),
        price: itemEdited.price,
      });
      setSelectedItem(itemEdited);
    }
  };

  const handleDelete = (id) => {
    const selectedProduct = products.filter((product) => product.id !== id);
    setProducts(selectedProduct);
    setFilteredProducts(selectedProduct);
  };

  const hadnldeDuplicate = (id) => {
    const duplicatedItem = products.find((item) => item.id === id);
    if (duplicatedItem) {
      const newProductDuplicated = {
        ...duplicatedItem,
        id: products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1,
      };
      const updatedProducts = [...products, newProductDuplicated];
      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts);
    }
  };

  const searchProduct = () => {
    const lowerCaseInput = searchInput.toLowerCase();
    const filtered = products.filter((item) => {
      return (
        item.title.toLowerCase().includes(lowerCaseInput) ||
        item.category.toLowerCase().includes(lowerCaseInput)
      );
    });
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    //json to object
    //taked as object
    const savedDate = JSON.parse(localStorage.getItem("data"));
    if (Array.isArray(savedDate)) {
      setProducts(savedDate);
      setFilteredProducts(savedDate);
    } else {
      setFilteredProducts([]);
      setProducts([]);
    }
  }, []);

  useEffect(() => {
    //saved as json
    localStorage.setItem("data", JSON.stringify(products));
  }, [products, formData]);

  useEffect(() => {
    if (!searchInput) {
      setFilteredProducts(products);
    }
  }, [products, searchInput]);

  useEffect(() => {
    searchProduct();
  }, [searchInput]);

  return (
    <div className="grid lg:justify-center py-8 gap-6 lg:gap-8 px-4 lg:w-full lg:items-center lg:py-10 lg:text-center text-slate-50">
      <div className="grid lg:gap-0 gap-1">
        <h1 className="font-bold uppercase text-3xl text-teal-500">Cruds</h1>
        <h2 className="font-semibold uppercase text-gray-200">
          product system managment
        </h2>
      </div>
      <Form
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        isDisabled={
          !formData.title ||
          !formData.price ||
          !formData.taxes ||
          !formData.ads ||
          !formData.discount ||
          !formData.category ||
          !formData.count
        }
      />
      <div className="lg:bg-[#000000] grid gap-4 rounded lg:p-6">
        <div className="lg:flex grid gap-2 justify-between items-center  border-b pb-4 border-gray-600">
          <h1 className="text-2xl font-semibold text-teal-500">Products</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              searchProduct();
            }}
            className="flex gap-2 lg:gap-3 items-center relative"
          >
            <input
              className="border bg-black w-full relative border-gray-500 rounded p-2"
              placeholder="search ..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <span className="absolute right-3">
              <BiSearch />
            </span>
          </form>
        </div>
        <div className="overflow-x-auto">
          <table cellPadding={9} className="min-w-full">
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {Array.isArray(filteredProducts) &&
              filteredProducts.length === 0 ? (
                <tr>
                  <td className="text-gray-500 lg:text-center" colSpan="10">
                    No products available
                  </td>
                </tr>
              ) : (
                Array.isArray(filteredProducts) &&
                filteredProducts.map((item, index) => {
                  return (
                    <Product
                      key={index}
                      product={item}
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                      hadnldeDuplicate={hadnldeDuplicate}
                    />
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
