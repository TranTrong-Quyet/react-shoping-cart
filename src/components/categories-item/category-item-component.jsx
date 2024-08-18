const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div
      className="p-5 rounded-2xl h-72 w-full"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="rounded border-2 p-4 h-full">
        <h1 className="text-slate-100 mb-4 text-3xl uppercase font-bold">
          {title}
        </h1>
        <p className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 object-fit size-fit cursor-pointer">
          Shop Now
        </p>
      </div>
    </div>
  );
};

export default CategoryItem;
