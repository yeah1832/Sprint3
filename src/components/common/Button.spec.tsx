import { render, screen } from "@testing-library/react";
import { BookStoreThemeProvider } from "../../context/themeContext";
import Button from "./Button";

describe("Button 컴포넌트 테스트", () => {
    it("랜더를 확인", () => {
        render(
            <BookStoreThemeProvider>
                <Button size="large" scheme="primary">
                    버튼
                </Button>
            </BookStoreThemeProvider>
        );

        expect(screen.getByText("버튼")).toBeInTheDocument();
    });
});