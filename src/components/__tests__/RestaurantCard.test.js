import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/RestaurantCardMock.json";
import "@testing-library/jest-dom";

it("should show restaurant card with data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Pizza Paradise");

    expect(name).toBeInTheDocument();
})