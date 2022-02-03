import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Descriptions, Typography, Button} from "antd";
import { 
  fetchExchangeAsync, 
  resetExchange, 
  selectExchange, 
  selectExchangeFetchStatus
} from "./exchangeSlice";
import { Link } from "react-router-dom";
import { 
  FacebookFilled, 
  RedditSquareFilled, 
  SlackSquareFilled,
  TwitterSquareFilled
} from "@ant-design/icons/lib/icons";
import Loading from "../loading/Loading";
import "./Exchange.scss";

const { Title} = Typography;

// helper functions to pad missing url params
const checkFBFullLinkOrFill = (str) => {
  if (str.includes("facebook")) {
    return str;
  }
  return !!str ? `https://facebook.com/${str}` : "";
}

// pad handles from twitter
const checkTwitterFullLinkOrFill = (str) => {
  return !!str ? `https://twitter.com/${str}` : "";
}

// helper functions to pad missing url params
const checkRedditFullLinkOrFill = (str) => {
  if (str.includes("reddit")) {
    return str;
  }
  return !!str ? `https://reddit.com${str}` : "";
}

// helper function to determine if data is usable for social icon creation
const checkSocialDataOrNull = (data, icon) => {
  const Icon = icon;
  return data.length 
  ? ( <a href={data} target="_blank" rel="noreferrer"><Icon /></a>) 
  : null
}

const Exchange = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const exchangeData = useSelector(selectExchange);
  const status = useSelector(selectExchangeFetchStatus);
  console.log(exchangeData);

  // added a unmounting and elements for updating
  useEffect(() => {
    dispatch(fetchExchangeAsync(params.exchange));

    return () => {
      dispatch(resetExchange(null));
    }
  }, [dispatch, params.exchange]);

  return (
    status === "idle" ? (
    <Row className="exchange">
      <Col span={20} offset={2}>
        <Button className="button-home" type="primary">
          <Link to="/">Return Home</Link>
        </Button>
        <Descriptions title={
          <Title className="exchange-header" >
            <img src={exchangeData.image} alt={`logo of ${exchangeData.name}`} /> 
            { " " }
            {exchangeData.name}
          </Title>} 
          className="exchange-container"
          >
          <Descriptions.Item label="Social Links" className="section">
            {checkSocialDataOrNull(checkFBFullLinkOrFill(exchangeData.facebook_url), FacebookFilled)}
            {checkSocialDataOrNull(checkTwitterFullLinkOrFill(exchangeData.twitter_handle), TwitterSquareFilled)}
            {checkSocialDataOrNull(checkRedditFullLinkOrFill(exchangeData.reddit_url), RedditSquareFilled)}
            {checkSocialDataOrNull(exchangeData.slack_url, SlackSquareFilled)}
          </Descriptions.Item>
          <Descriptions.Item label="Year Established" className="section-listing">
            {exchangeData.year_established}
          </Descriptions.Item>
          <Descriptions.Item label="Country" className="section-listing">
            {exchangeData.country}
          </Descriptions.Item>
          <Descriptions.Item label="Trust Score Rank" className="section-listing">
            {exchangeData.trust_score_rank}
          </Descriptions.Item>
        </Descriptions>
        <Descriptions className="exchange-container">
        <Descriptions.Item label="Description" className="description">
          {exchangeData.description.length ? exchangeData.description : "N/A"}
        </Descriptions.Item>
        <Descriptions.Item label="Total Volume (24hrs) BTC" className="description">
          {exchangeData.trade_volume_24h_btc ? exchangeData.trade_volume_24h_btc.toFixed(4) : "N/A"}
        </Descriptions.Item>
        </Descriptions>
      </Col>
    </Row> 
    ) : <Loading />
  )
};

export default Exchange;