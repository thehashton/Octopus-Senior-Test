import styles from "./Skeleton.module.css";

type SkeletonProps = {
  className?: string;
};

const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <span
      aria-hidden="true"
      className={
        className ? `${styles.skeleton} ${className}` : styles.skeleton
      }
    />
  );
};

export default Skeleton;
