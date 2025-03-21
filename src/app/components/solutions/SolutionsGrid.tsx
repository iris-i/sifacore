import styles from "./solutions.module.css";
import SolutionsItem from "./SolutionsItem";
import solutionsData from "../../../data/solution-items.json";


const { solutions_grid, solutions_grid_wrapper } = styles;

const SolutionsGrid = () => {
  return (
    <section className={`section-padding ${solutions_grid_wrapper}`}>
      <div className={solutions_grid}>
        {solutionsData.map((item, index) => (
          <SolutionsItem key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
};

export default SolutionsGrid;
