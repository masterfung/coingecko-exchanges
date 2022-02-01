import { Col, Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExchangesAsync } from "./exchangesSlice";

const Exchanges = () => {
  const dispatch = useDispatch();
  const exchanges = useSelector(state => state.exchanges.exchanges);

  useEffect(() => {
    dispatch(fetchExchangesAsync());
  }, []);
  
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
      render: (string) => <a href={string} target="_blank">Website</a>
    },
    {
      title: 'Trust Rank',
      dataIndex: 'trust_score_rank',
      key: 'trust_score_rank',
    },
  ];

  return (
    <Col span={20} offset={2}>
      <Table dataSource={exchanges} columns={columns} rowKey="id" />
    </Col>
  )
};

export default Exchanges;