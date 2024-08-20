const Product = ({ handleDelete, handleEdit, product }) => {
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
      <td>
        <button
          onClick={() => handleEdit(product.id)}
          className="bg-pink-800 rounded text-white px-4 hover:bg-opacity-80"
        >
          update
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(product.id)}
          className="bg-red-600 text-white rounded hover:bg-opacity-80 px-4"
        >
          delete
        </button>
      </td>
    </tr>
  );
};
export default Product;
