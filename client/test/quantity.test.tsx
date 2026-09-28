import { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Quantity } from "@/components/Quantity";

function QuantityField() {
  const [value, setValue] = useState(1);
  return <Quantity value={value} onChange={setValue} />;
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
});
