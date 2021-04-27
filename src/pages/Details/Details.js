import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { getSportDetail } from "../../utils/dataProvider";
import Card from "../../components/Ui/Card/Card";
import DetailTable from "../../components/Details/DetailTable";
import "./Details.css";

const { TabPane } = Tabs;

const Details = ({ match, history }) => {
  const [details, setDetails] = useState(null);
  useEffect(() => {
    const id = match.params.id;
    const sportDetails = getSportDetail(parseInt(id));
    setDetails(sportDetails);
  }, [match]);
  const backHandler = () => {
    history.goBack();
  };
  if (!details) return null;
  return (
    <Card>
      <div className="details">
        <div className="detailTitle">
          <span onClick={backHandler}>
            <LeftOutlined />
          </span>
          <h2>{details.Sport.c_Name}</h2>
          <em>Total Rank: {details.Medals.n_RankTotal}</em>
        </div>
        <Tabs defaultActiveKey="1">
          {details.GoldMedalList?.length && (
            <TabPane
              tab={
                <span>
                  <data value={details.GoldMedalList.length}>
                    {details.GoldMedalList.length}
                  </data>
                  Gold
                </span>
              }
              key="1"
            >
              <section>
                <h3>
                  <span className="medalIndicator n_Gold"></span>
                  Gold Medals
                </h3>

                <DetailTable data={details.GoldMedalList} />
              </section>
            </TabPane>
          )}
          {details.SilverMedalList?.length && (
            <TabPane
              tab={
                <span>
                  <data value={details.SilverMedalList.length}>
                    {details.SilverMedalList.length}
                  </data>
                  Silver
                </span>
              }
              key="2"
            >
              <section>
                <h3>
                  <span className="medalIndicator n_Silver"></span>
                  Silver Medals
                </h3>
                <DetailTable data={details.SilverMedalList} />
              </section>
            </TabPane>
          )}

          {details.BronzeMedalList?.length && (
            <TabPane
              tab={
                <span>
                  <data value={details.BronzeMedalList.length}>
                    {details.BronzeMedalList.length}
                  </data>
                  Bronze
                </span>
              }
              key="3"
            >
              <section>
                <h3>
                  <span className="medalIndicator n_Bronze"></span>
                  Bronze Medals
                </h3>
                <DetailTable data={details.BronzeMedalList} />
              </section>
            </TabPane>
          )}
        </Tabs>
      </div>
    </Card>
  );
};
export default Details;
