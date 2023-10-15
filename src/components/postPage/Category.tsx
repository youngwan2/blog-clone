"use client";
type Props = {
  setSelected: (parameter: string) => void;
  selected:string
};

const categories = ["all", "my story", "frontend", "backend", "javascript"];
export default function Category({ setSelected,selected }: Props) {
  return (
    <ul className="fixed top-24 right-16">
      <strong>Category</strong>
      {categories.map((category) => {
        return (
          <li
            key={category}
            className={`hover:text-green-400 cursor-pointer ${category === selected && 'text-green-500'}`}
            onClick={() => {
              setSelected(`${category}`);
            }}
          >
            {category === "all" ? "All Posts" : category}
          </li>
        );
      })}
    </ul>
  );
}
