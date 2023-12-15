"use client";
import { bookingPartnerService } from "@/services/BookingService";
import {
  CATEGORIES,
  FILTEREDCATEGORIES,
  FILTEREDSTATUS,
  getCategoryLabel,
  getLabelByStatus,
  keyF,
} from "@/utils/category";
import { convertTimeUTC } from "@/utils/convert";
import { DownloadOutlined, EyeFilled, SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Table,
  Tag,
  message,
} from "antd";
import { useEffect, useState } from "react";
import styles from "./booking.module.scss";
import moment from "moment";
const { RangePicker } = DatePicker;
const Booking = () => {
  const [bookings, setBookings] = useState([]);

  const getLabelColor = (label) => {
    const labelColorMap = {
      "chờ thanh toán": "magenta",
      "sắp tới": "blue",
      "hoàn tất": "green",
      "đã huỷ": "red",
      "vắng mặt": "volcano",
    };
    return labelColorMap[label] || "default";
  };

  const columns = [
    {
      title: "Mã đơn đặt",
      dataIndex: "IdentifyCode",
      key: "IdentifyCode",
    },
    {
      title: "Ngày thực hiện",
      dataIndex: "CreatedDate",
      key: "CreatedDate",
      render: (_, item) => {
        return item.OrderByTime
          ? `${convertTimeUTC(item.OrderByTimeFrom, true)}  `
          : `${convertTimeUTC(item.OrderByDateFrom)}  `;
      },
    },
    {
      title: "Vai trò",
      dataIndex: "Category",
      key: "Category",
      render: (_) => <p>{getCategoryLabel(_)}</p>,
    },
    {
      title: "Phòng / Dịch vụ",
      dataIndex: "Service",
      key: "Service",
      render: (_, record) => (
        <p>
          {record?.StudioRoom?.Name ||
            record?.PhotographerServicePackage?.Name ||
            record?.MakeupServicePackage?.Name ||
            record?.ModelServicePackage?.Name}
        </p>
      ),
    },
    {
      title: "Tên Khách hàng",
      dataIndex: "BookingUserName",
      key: "BookingUserName",
    },
    {
      title: "Trạng thái",
      dataIndex: "BoookingStatus",
      key: "BoookingStatus",
      render: (_, record) => (
        <Tag
          key={record.Id}
          color={getLabelColor(
            getLabelByStatus(record.BookingStatus, record.PaymentStatus)
          )}
        >
          {getLabelByStatus(record.BookingStatus, record.PaymentStatus)}
        </Tag>
      ),
    },
    {
      title: "Thao tác",
      dataIndex: "Action",
      key: "Action",
      render: () => <Button icon={<EyeFilled />} />,
    },
  ];

  const onFinish = async (value) => {
    try {
      const { data } = await bookingPartnerService.getAllBookingPartner(1, 10, {
        category: value.category,
        EntryDate: value?.EntryDateRaw
          ? value.EntryDateRaw.reduce((acc, item, index) => {
              const key = index === 0 ? "startDate" : "endDate";
              return { ...acc, [key]: moment(item.$d).format() };
            }, {})
          : {
              startDate: "",
              endDate: "",
            },
        Identify_like: value.Identify_like,
        BookingStatus: value?.status
          ? keyF.find((val) => val.value === value.status).BookingStatus
          : undefined,
        PaymentStatus: value?.status
          ? keyF.find((val) => val.value === value.status).PaymentStatus
          : undefined,
      });
      setBookings(data);
    } catch (error) {
      message.error("some thing went wrong!");
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await bookingPartnerService.getAllBookingPartner();
        setBookings(data);
      } catch (error) {
        message.error("some thing went wrong!");
      }
    })();
  }, []);

  return (
    <div className={styles.booking}>
      <div className={styles.head}>
        <div className={styles.title}>
          <p>Quản lý đơn đặt</p>
          <Button size="large" type="primary" icon={<DownloadOutlined />}>
            Download
          </Button>
        </div>
        <Form
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          style={{ width: "100%" }}
          onFinish={onFinish}
          //   onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[16, 16]}>
            <Col sm={24} md={5} xl={5} xxl={5}>
              <Form.Item label="Tìm kiếm" name="Identify_like">
                <Input
                  prefix={<SearchOutlined />}
                  size="large"
                  placeholder="Mã đơn / Tên KH"
                />
              </Form.Item>
            </Col>
            <Col sm={24} md={5} xl={5} xxl={5}>
              <Form.Item label="Ngày thực hiện" name="EntryDateRaw">
                <RangePicker size="large" />
              </Form.Item>
            </Col>
            <Col sm={24} md={4} xl={4} xxl={4}>
              <Form.Item label="Vai trò" name="category">
                <Select
                  placeholder="Danh mục"
                  size="large"
                  options={FILTEREDCATEGORIES()}
                />
              </Form.Item>
            </Col>
            <Col sm={24} md={4} xl={4} xxl={4}>
              <Form.Item label="Phòng / Dịch vụ" name="none">
                <Select
                  placeholder="Phòng / Dịch vụ"
                  disabled
                  size="large"
                  options={CATEGORIES}
                />
              </Form.Item>
            </Col>
            <Col sm={24} md={4} xl={4} xxl={4}>
              <Form.Item label="Trạng thái" name="status">
                <Select
                  placeholder="Trạng thái"
                  size="large"
                  options={FILTEREDSTATUS()}
                />
              </Form.Item>
            </Col>

            <Col sm={24} md={2}>
              <Form.Item label=" ">
                <Button size="large" block type="primary" htmlType="submit">
                  Tìm
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <div className={styles.body}>
        <Table dataSource={bookings} columns={columns} />;
      </div>
    </div>
  );
};

export default Booking;
