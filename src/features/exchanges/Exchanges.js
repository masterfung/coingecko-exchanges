import { Col, Table, Typography } from "antd";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExchangesAsync } from "./exchangesSlice";

const { Title } = Typography;

const Exchanges = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const exchanges = useSelector(state => state.exchanges.exchanges);

  useEffect(() => {
    dispatch(fetchExchangesAsync());
  }, [dispatch]);
  
  const columns = [
    {
      title: 'Logo',
      dataIndex: 'image',
      key: 'image',
      render: (src) => <img src={src} alt="exchange logo"></img>
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Site',
      dataIndex: 'url',
      key: 'url',
      render: (url) => <a rel="noreferrer" href={url} target="_blank">Visit Exchange</a>
    },
    {
      title: 'Trust Rank',
      dataIndex: 'trust_score_rank',
      key: 'trust_score_rank',
    },
  ];

  return (
    <Col span={20} offset={2}>
      <Title>Exchanges</Title>
      <Table 
        dataSource={exchanges} 
        columns={columns} 
        onRow={(record) => {
          return {
            onClick: event => { 
              console.log(record);
              navigate(`/exchange/${record.id}`)
            },
          };
        }}
        rowKey="id" />
    </Col>
  )
};

export default Exchanges;