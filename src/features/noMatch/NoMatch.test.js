import { shallow } from "enzyme";
import NoMatch from "./NoMatch";

describe("NoMatch Component", () => {
  it("should render NoMatch component", () => {
    expect(shallow(<NoMatch />)).toMatchSnapshot();
  });
});