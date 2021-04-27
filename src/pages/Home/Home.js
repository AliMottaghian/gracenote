import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getNocDetail, getSportsList } from "../../utils/dataProvider";
import Card from "../../components/Ui/Card/Card";
import NocDetails from "../../components/Home/NocDetails";
import SportListItem from "../../components/Home/SportListItem";

const Home = ({ history }) => {
  const [nocMedals, setNocMedals] = useState(null);
  const [sportsList, setSportsList] = useState(null);

  useEffect(() => {
    const nocDetail = getNocDetail();
    const sportsList = getSportsList();
    setNocMedals(nocDetail);
    setSportsList(sportsList);
  }, []);
  return (
    <>
      <div>
        <Card>
          {nocMedals?.Medals && (
            <NocDetails
              medals={nocMedals.Medals}
              country={`${nocMedals?.NOC.c_Name} (${nocMedals?.NOC.c_Short})`}
            />
          )}
        </Card>
      </div>
      {sportsList?.map((item) => {
        return (
          <Card key={item.Sport.n_ID}>
            <SportListItem
              history={history}
              name={item.Sport.c_Name}
              id={item.Sport.n_ID}
            />
          </Card>
        );
      })}
    </>
  );
};

Home.propTypes = {
  history: PropTypes.object
};
export default Home;
