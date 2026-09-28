import { fireEvent, render, screen, within } from "@testing-library/react";
import { CartProvider } from "@/components/Cart";
import { Header } from "@/components/Header";
import { Purchase } from "@/components/Product/Purchase";

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

describe("cart", () => {
  function renderCart() {
    render(
      <CartProvider>
        <Header />
        <Purchase price="£12.99" />
      </CartProvider>,
    );
  }

  it("hides the badge when the cart is empty", () => {
    renderCart();

    // The quantity stepper also shows "1", so look only inside the header.
    expect(
      within(screen.getByRole("banner")).queryByText("1"),
    ).not.toBeInTheDocument();
  });

  it("adds the selected quantity", () => {
    renderCart();

    fireEvent.click(screen.getByRole("button", { name: "Increase quantity" }));
    fireEvent.click(screen.getByRole("button", { name: "Add to cart" }));

    expect(
      within(screen.getByRole("banner")).getByText("2"),
    ).toBeInTheDocument();
  });
});
