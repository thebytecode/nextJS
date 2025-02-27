import { render, screen, waitFor } from "@testing-library/react";
import Sidebar from "../Sidebar";

test("fetches and displays user details", async () => {
  // Mock fetchUser function
  const mockFetchUser = jest.fn().mockResolvedValue({
    name: "John Doe",
    email: "alice@example.com",
  });

  render(<Sidebar fetchUser={mockFetchUser} />);

  // Ensure loading text appears initially
  expect(screen.getByTestId("loading")).toBeInTheDocument();

  // Wait for user data to be displayed
  await waitFor(() => screen.getByTestId("user-info"));

  // Check if user details are rendered
  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("john@example.com")).toBeInTheDocument();
});
