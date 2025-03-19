import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner", () => {
  it("renders banner with default content", () => {
    render(<Banner />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByText(/i love programming/i)).toBeInTheDocument();
  });

  it("renders banner with default styling", () => {
    render(<Banner />);
    const banner = screen.getByRole("banner");
    expect(banner).toHaveClass("w-full");
  });

  it("renders banner image with proper attribution", () => {
    render(<Banner />);
    const image = screen.getByAltText("Programming workspace setup");
    expect(image).toBeInTheDocument();
    expect(screen.getByText(/Photo by/i)).toBeInTheDocument();
  });

  it("applies custom background color class", () => {
    render(<Banner backgroundColor="bg-green-600" />);
    const banner = screen.getByRole("banner");
    expect(banner).toHaveClass("bg-green-600");
  });
});
