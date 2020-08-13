import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import ChangePasswordForm from ".";

afterEach(cleanup);

describe("Input Component", () => {
  test("Renders the right input value", () => {
    const setup = () => {
      const utils = render(<ChangePasswordForm />);
      const input = utils.getByLabelText("New Password");
      return {
        input,
        ...utils,
      };
    };
    const { input } = setup();
    fireEvent.change(input, {
      target: {
        value: "francisca",
      },
    });
    expect(input.value).toBe("");
  });
  test("renders without crashing", () => {
    expect(() => render(<LoginForm />)).not.toThrowError();
  });
  // test('Matches the snapshot', () => {
  //     const button = create(<Button/>);
  //     expect(button.toJSON()).toMatchSnapshot();
  // });
});
