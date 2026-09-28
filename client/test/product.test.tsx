import { render, screen } from "@testing-library/react";
import { CartProvider } from "@/components/Cart";
import { Product } from "@/components/Product";
import { ProductCard } from "@/components/Product/ProductCard";
import type { Product as ProductType } from "@/lib/products";

vi.mock("next/image", () => ({
  default: (props: { alt: string }) => <img alt={props.alt} />,
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => <a href={href}>{children}</a>,
}));

const bulb: ProductType = {
  id: "1",
  name: "Energy saving light bulb",
  power: "25W",
  description: "Spiral light bulb",
  price: 1299,
  quantity: 4,
  brand: "Philips",
  weight: 77,
  height: 12.6,
  width: 6.2,
  length: 6.2,
  model_code: "E27 ES",
  colour: "Cool daylight",
  img_url: "/philips-plumen.jpg",
};

describe("Product", () => {
  it("shows the name, price, and specifications", () => {
    render(
      <CartProvider>
        <Product product={bulb} />
      </CartProvider>,
    );

    expect(
      screen.getByRole("heading", { name: "Energy saving light bulb" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/£12\.99/)).toBeInTheDocument();
    expect(screen.getByText("Philips")).toBeInTheDocument();
    expect(screen.getByText("12.6 x 6.2 x 6.2")).toBeInTheDocument();
  });
});

describe("ProductCard", () => {
  it("links to the product page", () => {
    render(<ProductCard product={bulb} />);

    expect(screen.getByRole("link", { name: "View Product" })).toHaveAttribute(
      "href",
      "/products/1",
    );
  });
});
