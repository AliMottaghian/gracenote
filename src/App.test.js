import App from "./App";

describe('<App />',()=>{
  const wrapper =  shallow(<App />);
  it("should render App component without crashing",()=>{
    expect(wrapper).toMatchSnapshot()
  })
})