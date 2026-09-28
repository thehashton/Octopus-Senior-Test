import { render, screen } from "@testing-library/react";
import { Button } from "@/components/Button";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => <a href={href}>{children}</a>,
}));

describe("Button", () => {
  it("shows busy and disabled state while loading", () => {
    render(
      <Button loading onClick={() => undefined}>
        Add to cart
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Add to cart" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
  });

  it("ignores loading when rendered as a link", () => {
    render(
      <Button href="/products" loading>
        View products
      </Button>,
    );

    expect(
      screen.getByRole("link", { name: "View products" }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
