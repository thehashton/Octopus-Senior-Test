import { formatPrice } from "@/lib/products";

describe("formatPrice", () => {
  it("formats pence as pounds", () => {
    // Intl sometimes inserts a non-breaking space between £ and the amount.
    expect(formatPrice(1299).replace(/\u00a0/g, "")).toBe("£12.99");
  });
});
