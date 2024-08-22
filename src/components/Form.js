const Form = ({ handleSubmit, formData, setFormData, isDisabled }) => {
  return (
    <div>
      <form className="lg:w-full grid gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-black p-2 rounded"
          placeholder="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
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
            required
          />
          <input
            type="text"
            className="bg-black p-2 rounded"
            placeholder="taxes"
            value={formData.taxes}
            onChange={(e) =>
              setFormData({ ...formData, taxes: e.target.value })
            }
            required
          />
          <input
            type="text"
            className="bg-black p-2 rounded"
            placeholder="ads"
            value={formData.ads}
            onChange={(e) => setFormData({ ...formData, ads: e.target.value })}
            required
          />
          <input
            type="text"
            className="bg-black p-2 rounded"
            placeholder="discount"
            value={formData.discount}
            onChange={(e) =>
              setFormData({ ...formData, discount: e.target.value })
            }
            required
          />
        </div>
        <p className="text-teal-500 text-left">
          Total :
          <span className="underlane font-semibold">
            {formData.price ||
            formData.taxes ||
            formData.ads ||
            formData.discount
              ? Number(formData.price) +
                Number(formData.taxes) +
                Number(formData.ads) +
                Number(formData.discount)
              : 0}
          </span>
        </p>
        <input
          type="text"
          className="bg-black p-2 rounded"
          placeholder="count"
          value={formData.count}
          onChange={(e) => setFormData({ ...formData, count: e.target.value })}
          required
        />
        <input
          type="text"
          className="bg-black p-2 rounded"
          placeholder="category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          required
        />
        <button
          className={`p-2 text-white rounded text-center ${
            isDisabled
              ? " cursor-not-allowed bg-[#4848482a] hover:bg-opacity-100"
              : "hover:bg-opacity-90 bg-teal-700 "
          }`}
        >
          create
        </button>
      </form>
    </div>
  );
};
export default Form;
