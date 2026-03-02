import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import "@testing-library/jest-dom";

it("should load header component with Login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: "Prasad" }}>
          <Header />
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: /login/i });

  expect(loginButton).toBeInTheDocument();
});

it("should show cart with 0 items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: "Prasad" }}>
          <Header />
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText("Cart - 0 items");

  expect(cart).toBeInTheDocument();
});

it("should change login button to logout when clicked", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: "Prasad" }}>
          <Header />
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: /login/i });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: /logout/i });
  expect(logoutButton).toBeInTheDocument();
});