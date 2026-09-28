import { getProduct, getProducts } from "@/lib/products";

describe("demo catalogue", () => {
  beforeEach(() => {
    vi.stubEnv("DEMO_MODE", "true");
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it("returns the hard-coded bulb without calling the API", async () => {
    const products = await getProducts();
    const product = await getProduct("1");

    expect(products).toHaveLength(1);
    expect(product.name).toBe("Energy saving light bulb");
    expect(fetch).not.toHaveBeenCalled();
  });

  it("throws when the id is not in the fixture", async () => {
    await expect(getProduct("99")).rejects.toThrow("Product 99 not found");
  });
});
