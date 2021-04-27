import Home from "./Home";

describe('<Home />',()=>{
  const wrapper =  shallow(<Home />);
  it("should render App component without crashing",()=>{
    expect(wrapper).toMatchSnapshot()
  })
})