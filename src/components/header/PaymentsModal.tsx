import React, { useState } from "react";
import { Form, Input, InputNumber, Modal, Radio } from "antd";

const PaymentsModal = ({
  isModalVisible,
  setIsModalVisible,
}: {
  isModalVisible: boolean;
  setIsModalVisible: any;
}) => {
  const [radioValue, setRadioValue] = useState(1);

  const handleSubmit = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (e: any) => {
    setRadioValue(e.target.value);
  };

  return (
    <Modal
      title="Payments"
      visible={isModalVisible}
      onOk={handleSubmit}
      onCancel={handleCancel}
      okText="Submit"
    >
      <Form name="basic" initialValues={{ remember: true }}>
        <Form.Item label="Title" name="title" required>
          <Input placeholder="title" />
        </Form.Item>
        <Form.Item label="Amount" name="amount" required>
          <InputNumber placeholder="amount" />
        </Form.Item>
        <Form.Item label="Type of Payment" name="type" required>
          <Radio.Group onChange={onChange} value={radioValue}>
            <Radio.Button value={1}>Weekly</Radio.Button>
            <Radio.Button value={2}>Monthly</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PaymentsModal;
