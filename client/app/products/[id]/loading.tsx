import { ProductSkeleton } from "@/components/Skeleton";

export default function ProductLoading() {
  return (
    <main aria-busy="true" aria-label="Loading product">
      <ProductSkeleton />
    </main>
  );
}
