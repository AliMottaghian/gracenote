import NocDetails from "./NocDetails";
import ModalBox from "../../components/Home/MedalBox";

describe("<NocDetails />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <NocDetails
        medals={[
          { key: "val", key2: "val2" },
          { key: "val", key2: "val2" },
        ]}
        country="Netherlands"
      />
    );
  });

  it("should render the country name with -Medals", () => {
    const headline = wrapper.find("h3");
    expect(headline.text()).toBe("Netherlands - Medals");
  });

  it("should render two ModalBox componenet", () => {
    const modalBox = wrapper.find(ModalBox);
    expect(modalBox).toHaveLength(2);
  });
});
