import CategoryItem from "../categories-item/category-item-component";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container px-36 py-25 grid gird-row-2 gap-4 grid-cols-3 py-20">
      {categories.map((category) => {
        return (
          <CategoryItem key={category.id} category={category}></CategoryItem>
        );
      })}
    </div>
  );
};

export default Directory;
