import styles from "./solutions-item.module.css";

interface SolutionsItemProps {
  title: string;
  description: string;
}

const SolutionsItem = ({ title, description }: SolutionsItemProps) => {
  return (
    <div className={styles.solutions_item}>
      <h3 className={`text-28 all-caps-heading ${styles.solutions_item_title}`}>{title}</h3>
      <p className={`text-24 ${styles.solutions_item_text}`}>{description}</p>
    </div>
  );
};

export default SolutionsItem;
