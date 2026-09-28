import { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Quantity } from "@/components/Quantity";

function QuantityField({ max = 4 }: { max?: number }) {
  const [value, setValue] = useState(1);
  return <Quantity value={value} onChange={setValue} max={max} />;
}

describe("Quantity", () => {
  it("starts at 1 and cannot go lower", () => {
    render(<QuantityField />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Decrease quantity" }),
    ).toBeDisabled();
  });

  it("increases and then decreases the quantity", () => {
    render(<QuantityField />);

    fireEvent.click(screen.getByRole("button", { name: "Increase quantity" }));
    fireEvent.click(screen.getByRole("button", { name: "Increase quantity" }));
    expect(screen.getByText("3")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Decrease quantity" }));
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("cannot go past the stock max", () => {
    render(<QuantityField max={4} />);

    const increase = screen.getByRole("button", { name: "Increase quantity" });
    fireEvent.click(increase);
    fireEvent.click(increase);
    fireEvent.click(increase);

    expect(screen.getByText("4")).toBeInTheDocument();
    expect(increase).toBeDisabled();

    fireEvent.click(increase);
    expect(screen.getByText("4")).toBeInTheDocument();
  });
});
