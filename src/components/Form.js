const Form = ({ handleSubmit, formData, setFormData }) => {
  return (
    <div>
      <form
        className="lg:w-full grid gap-3 lg:shadow lg:p-6"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="bg-black p-2 rounded"
          placeholder="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <div className="lg:flex grid grid-cols-2 gap-2 gap-y-1 items-center">
          <input
            type="text"
            className="bg-black p-2 rounded"
            placeholder="price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
          <input
            type="text"
            className="bg-black p-2 rounded"
            placeholder="taxes"
            value={formData.taxes}
            onChange={(e) =>
              setFormData({ ...formData, taxes: e.target.value })
            }
          />
          <input
            type="text"
            className="bg-black p-2 rounded"
            placeholder="ads"
            value={formData.ads}
            onChange={(e) => setFormData({ ...formData, ads: e.target.value })}
          />
          <input
            type="text"
            className="bg-black p-2 rounded"
            placeholder="discount"
            value={formData.discount}
            onChange={(e) =>
              setFormData({ ...formData, discount: e.target.value })
            }
          />
          <p className="text-orange-500">
            Total :{" "}
            <span className="underlane font-semibold">
              $30{" "}
              {Number(formData.price) +
                Number(formData.taxes) +
                Number(formData.ads) +
                Number(formData.discount)}
            </span>
          </p>
        </div>
        <input
          type="text"
          className="bg-black p-2 rounded"
          placeholder="count"
          value={formData.count}
          onChange={(e) => setFormData({ ...formData, count: e.target.value })}
        />
        <input
          type="text"
          className="bg-black p-2 rounded"
          placeholder="category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        />
        <button className="bg-orange-700  p-2 hover:bg-opacity-90 text-white rounded text-center">
          create
        </button>
      </form>
    </div>
  );
};
export default Form;
