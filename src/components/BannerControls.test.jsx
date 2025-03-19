import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BannerControls from "./BannerControls";

describe("BannerControls", () => {
  const mockOnChange = vi.fn();
  const defaultValues = {
    title: "I Love Programming",
    subText: "The joy of creating something from nothing and solving complex problems keeps me motivated every day.",
    backgroundColor: "#0000ff",
    bannerImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it("renders the form controls", () => {
    render(<BannerControls onStyleChange={mockOnChange} values={defaultValues} />);
    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("renders color input with default value", () => {
    render(<BannerControls onStyleChange={mockOnChange} values={defaultValues} />);
    const colorInput = screen.getByLabelText(/background color/i);
    expect(colorInput).toHaveValue(defaultValues.backgroundColor);
  });

  it("renders text inputs with default values", () => {
    render(<BannerControls onStyleChange={mockOnChange} values={defaultValues} />);
    expect(screen.getByLabelText(/banner title/i)).toHaveValue(defaultValues.title);
    expect(screen.getByLabelText(/banner text/i)).toHaveValue(defaultValues.subText);
  });

  it("calls onStyleChange when title is changed", () => {
    render(<BannerControls onStyleChange={mockOnChange} values={defaultValues} />);
    const titleInput = screen.getByLabelText(/banner title/i);
    
    fireEvent.change(titleInput, { target: { value: "New Title" } });
    
    expect(mockOnChange).toHaveBeenCalledWith({
      ...defaultValues,
      title: "New Title"
    });
  });

  it("renders file input for image upload", () => {
    render(<BannerControls onStyleChange={mockOnChange} values={defaultValues} />);
    expect(screen.getByLabelText(/upload image/i)).toBeInTheDocument();
  });

  it("renders reset button", () => {
    render(<BannerControls onStyleChange={mockOnChange} values={defaultValues} />);
    expect(screen.getByRole("button", { name: /reset/i })).toBeInTheDocument();
  });

  it("calls onStyleChange with default values when reset is clicked", () => {
    render(<BannerControls onStyleChange={mockOnChange} values={defaultValues} />);
    const resetButton = screen.getByRole("button", { name: /reset/i });
    
    fireEvent.click(resetButton);
    
    expect(mockOnChange).toHaveBeenCalledWith(defaultValues);
  });
});
