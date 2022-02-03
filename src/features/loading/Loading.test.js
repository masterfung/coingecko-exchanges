import { shallow } from "enzyme";
import Loading from "./Loading";

describe("Loading component", () => {
  it("should load and render properly", () => {
    expect(shallow(<Loading />)).toMatchSnapshot();
  });
})