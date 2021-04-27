import SportListItem from "./SportListItem";

describe("<SportListItem />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <SportListItem name="Soccer" id={1} history={{ push: () => {} }} />
    );
  });

  it("should render App component without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should render the name in Strong tag", () => {
    const strong = wrapper.find("strong");
    expect(strong.text()).toBe("Soccer");
  });
});
