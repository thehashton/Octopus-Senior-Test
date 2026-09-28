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
    expect(product?.name).toBe("Energy saving light bulb");
    expect(fetch).not.toHaveBeenCalled();
  });

  it("returns null when the id is not in the fixture", async () => {
    await expect(getProduct("99")).resolves.toBeNull();
  });
});

describe("live catalogue", () => {
  beforeEach(() => {
    vi.stubEnv("DEMO_MODE", "false");
    vi.stubEnv("GRAPHQL_URL", "http://localhost:3001/graphql");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it("rejects when GRAPHQL_URL is missing before calling fetch", async () => {
    vi.stubEnv("GRAPHQL_URL", "");
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    await expect(getProduct("1")).rejects.toThrow("GRAPHQL_URL is not set");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejects when the response is not ok", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
        json: async () => ({}),
      }),
    );

    await expect(getProduct("1")).rejects.toThrow(
      "GraphQL request failed with status 500",
    );
  });

  it("rejects with the GraphQL error message", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => ({
          errors: [{ message: "Field Product is required" }],
          data: { Product: { id: "1" } },
        }),
      }),
    );

    await expect(getProduct("1")).rejects.toThrow("Field Product is required");
  });

  it("returns null when the product is missing", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => ({
          data: { Product: null },
        }),
      }),
    );

    await expect(getProduct("99")).resolves.toBeNull();
  });

  it("rejects getProducts when the response is not ok", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 503,
        json: async () => ({}),
      }),
    );

    await expect(getProducts()).rejects.toThrow(
      "GraphQL request failed with status 503",
    );
  });

  it("rejects getProducts with the GraphQL error message", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => ({
          errors: [{ message: "Cannot query field allProducts" }],
          data: { allProducts: [{ id: "1" }] },
        }),
      }),
    );

    await expect(getProducts()).rejects.toThrow(
      "Cannot query field allProducts",
    );
  });
});
