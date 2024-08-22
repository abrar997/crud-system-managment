import { BiDuplicate, BiSolidEdit, BiTrash } from "react-icons/bi";

const Product = ({ handleDelete, handleEdit, product, hadnldeDuplicate }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.taxes}</td>
      <td>{product.ads}</td>
      <td>{product.discount}</td>
      <td className="text-red-200">
        $
        {Number(product.price) +
          Number(product.taxes) +
          Number(product.ads) +
          Number(product.discount)}
      </td>
      <td>{product.category}</td>
      <td className="flex gap-2 items-center lg:ml-6">
        <button
          onClick={() => handleEdit(product.id)}
          className="border border-pink-400 rounded text-white p-1 lg:p-2 hover:text-pink-200"
        >
          <BiSolidEdit />
        </button>
        <button
          onClick={() => hadnldeDuplicate(product.id)}
          className="border border-teal-600 rounded text-white p-1 lg:p-2 hover:text-teal-200"
        >
          <BiDuplicate />
        </button>
        <button
          onClick={() => handleDelete(product.id)}
          className="border border-red-600 rounded text-white p-1 lg:p-2 hover:text-red-200"
        >
          <BiTrash />
        </button>
      </td>
    </tr>
  );
};
export default Product;
