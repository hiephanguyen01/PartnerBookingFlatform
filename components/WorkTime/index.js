"use client";
import { InfoCircleOutlined } from "@ant-design/icons";
import classes from "./workTime.module.scss";
import {
  Button,
  Checkbox,
  Col,
  Row,
  Select,
  Slider,
  Tooltip,
  message,
} from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormDataStudioPost } from "@/store/action/studioPostAction";
import { studioPostService } from "@/services/studioPostService";
import { RESET_FORM_DATA } from "@/store/types/studioPostType";
import { useSearchParams } from "next/navigation";
const { Option } = Select;
export default function WorkTime({ next }) {
  const [messageApi, contextHolder] = message.useMessage();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [obj, setObj] = useState({
    morning: {
      hourMorningStart: "07",
      miMorningStart: "30",
      hourMorningEnd: "11",
      miMorningEnd: "30",
    },
    after: {
      hourMorningStart: "12",
      miMorningStart: "30",
      hourMorningEnd: "17",
      miMorningEnd: "00",
    },
    evening: {
      hourMorningStart: "18",
      miMorningStart: "30",
      hourMorningEnd: "22",
      miMorningEnd: "00",
    },
  });
  const { formData } = useSelector((state) => state.studioPostReducer);
  const [checkBoxs, setCheckBoxs] = useState({
    morning: false,
    afternoon: false,
    evening: false,
  });
  const [loadingBtn, setLoadingBtn] = useState(false);
  const dispatch = useDispatch();

  const onChangeSelectBreak = (value) => {
    dispatch(updateFormDataStudioPost(`BreakMinutes`, value));
  };

  const onChange = (value, number) => {
    let output;
    switch (number) {
      case 1:
        output = value.map((element) => {
          // element.toString().includes("5")
          //   ? parseInt(element.toString().replace("5", "3"))
          //   : element;
          let num = element.toString();
          console.log(num, num[2]);
          const modifiedNum =
            num[1] == "5"
              ? parseInt(num.slice(0, -2) + "3" + num.slice(-1))
              : num[2] == "5"
              ? parseInt(num.toString().replace("5", "3"))
              : element;
          return modifiedNum;
        });

        setObj({
          ...obj,
          morning: {
            ...obj.morning,
            hourMorningStart: output[0].toString().padStart(4, "0").slice(0, 2),
            miMorningStart: output[0].toString().padStart(4, "0").slice(2, 4),
            hourMorningEnd: output[1].toString().padStart(4, "0").slice(0, 2),
            miMorningEnd: output[1].toString().padStart(4, "0").slice(2, 4),
          },
        });
        break;
      case 2:
        output = value.map((num) => {
          const strNum = num.toString();
          console.log(strNum[-2]);
          const modifiedNum =
            strNum[2] == "5"
              ? parseInt(strNum.slice(0, -2) + "3" + strNum.slice(-1))
              : num;
          return modifiedNum;
        });
        setObj({
          ...obj,
          after: {
            ...obj.after,
            hourMorningStart: output[0].toString().padStart(4, "0").slice(0, 2),
            miMorningStart: output[0].toString().padStart(4, "0").slice(2, 4),
            hourMorningEnd: output[1].toString().padStart(2, "0").slice(0, 2),
            miMorningEnd: output[1].toString().padStart(4, "0").slice(2, 4),
          },
        });
        break;
      case 3:
        output = value.map((num) => {
          const strNum = num.toString();
          console.log(strNum[-2]);
          const modifiedNum =
            strNum[2] == "5"
              ? parseInt(strNum.slice(0, -2) + "3" + strNum.slice(-1))
              : num;
          return modifiedNum;
        });
        setObj({
          ...obj,

          evening: {
            ...obj.evening,
            hourMorningStart: output[0].toString().padStart(4, "0").slice(0, 2),
            miMorningStart: output[0].toString().padStart(4, "0").slice(2, 4),
            hourMorningEnd: output[1].toString().padStart(2, "0").slice(0, 2),
            miMorningEnd: output[1].toString().padStart(4, "0").slice(2, 4),
          },
        });
        break;

      default:
        break;
    }
    // setObj({
    //   ...obj,
    //   morning: {
    //     hourMorningStart: output[0].toString().padStart(4, "0").slice(0, 2),
    //     miMorningStart: output[0].toString().padStart(4, "0").slice(2, 4),
    //     hourMorningEnd: output[1].toString().padStart(2, "0").slice(0, 2),
    //     miMorningEnd: output[1].toString().padStart(4, "0").slice(2, 4),
    //   },
    // });
    console.log("onChange: ", obj);
  };
  const onChangeCheckBox = (e, number) => {
    console.log(`checked = ${e.target.checked},`, number);
    switch (number) {
      case 1:
        setCheckBoxs({ ...checkBoxs, morning: e.target.checked });
        break;
      case 2:
        setCheckBoxs({ ...checkBoxs, afternoon: e.target.checked });
        break;
      case 3:
        setCheckBoxs({ ...checkBoxs, evening: e.target.checked });
        break;

      default:
        break;
    }
  };

  const handleSubmit = async () => {
    setLoadingBtn(true);
    dispatch(
      updateFormDataStudioPost(
        `OpenMorningHour`,
        checkBoxs.morning ? obj.morning.hourMorningStart : "0"
      )
    );
    dispatch(
      updateFormDataStudioPost(
        `OpenMorningMinutes`,
        checkBoxs.morning ? obj.morning.miMorningStart : "0"
      )
    );
    dispatch(
      updateFormDataStudioPost(
        `CloseMorningHour`,
        checkBoxs.morning ? obj.morning.hourMorningEnd : "0"
      )
    );
    dispatch(
      updateFormDataStudioPost(
        `CloseMorningMinutes`,
        checkBoxs.morning ? obj.morning.miMorningEnd : "0"
      )
    );
    dispatch(
      updateFormDataStudioPost(
        `OpenAfternoonHour`,
        checkBoxs.afternoon ? obj.after.hourMorningStart : "0"
      )
    );
    dispatch(
      updateFormDataStudioPost(
        `OpenAfternoonMinutes`,
        checkBoxs.afternoon ? obj.after.miMorningStart : "0"
      )
    );
    dispatch(
      updateFormDataStudioPost(
        `CloseAfternoonHour`,
        checkBoxs.afternoon ? obj.after.hourMorningEnd : "0"
      )
    );
    dispatch(
      updateFormDataStudioPost(
        `CloseAfternoonMinutes`,
        checkBoxs.afternoon ? obj.after.miMorningEnd : "0"
      )
    );

    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    // In ra console
    console.log(formDataObject);
    try {
      const { data } = await studioPostService.createStudioPost(category,formData);
      console.log("create", data);
      if (data.success) {
        dispatch({ type: RESET_FORM_DATA });
        setLoadingBtn(false);
        next();
      }
    } catch (error) {
      console.log("error", error);
      messageApi.open({
        type: "error",
        content: error.response.data.message,
      });
      setLoadingBtn(false);
    }
  };
  return (
    <section>
      {contextHolder}
      <div className={classes.container}>
        <h3>Thời gian làm việc</h3>
        <p>
          Thiết lập ban đầu và bạn có thể thay đổi thời gian làm việc cho từng
          loại phòng theo từng ngày!
        </p>

        <Row>
          <Col span={14}>
            <div
              style={{
                marginTop: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div>
                <Checkbox onChange={(e) => onChangeCheckBox(e, 1)}>
                  Buổi sáng: {obj.morning.hourMorningStart || "07"}:
                  {obj.morning.miMorningStart || "00"} -{" "}
                  {obj.morning.hourMorningEnd || "11"}:
                  {obj.morning.miMorningEnd || "30"}
                </Checkbox>
                <Slider
                  style={{ marginTop: "20px" }}
                  onChange={(value) => onChange(value, 1)}
                  range
                  disabled={!checkBoxs.morning}
                  min={500}
                  max={1200}
                  step={null}
                  tooltip={{ open: false }}
                  marks={{
                    500: "05:00",
                    550: "05:30",
                    600: "06:00",
                    650: "06:30",
                    700: "07:00",
                    750: "07:30",
                    800: "08:00",
                    850: "08:30",
                    900: "09:00",
                    950: "09:30",
                    1000: "10:00",
                    1050: "10:30",
                    1100: "11:00",
                    1150: "11:30",
                    1200: "12:00",
                  }}
                  defaultValue={[750, 1150]}
                />
              </div>
              <div>
                <Checkbox onChange={(e) => onChangeCheckBox(e, 2)}>
                  Buổi chiều: {obj.after.hourMorningStart || "12"}:
                  {obj.after.miMorningStart || "30"} -{" "}
                  {obj.after.hourMorningEnd || "17"}:
                  {obj.after.miMorningEnd || "00"}
                </Checkbox>
                <Slider
                  style={{ marginTop: "20px" }}
                  onChange={(value) => onChange(value, 2)}
                  disabled={!checkBoxs.afternoon}
                  range
                  min={1250}
                  max={1800}
                  step={null}
                  tooltip={{ open: false }}
                  marks={{
                    1250: "12:30",
                    1300: "13:00",
                    1350: "13:30",
                    1400: "14:00",
                    1450: "14:30",
                    1500: "15:00",
                    1550: "15:30",
                    1600: "16:00",
                    1650: "16:30",
                    1700: "17:00",
                    1750: "17:30",
                    1800: "18:00",
                  }}
                  defaultValue={[1250, 1700]}
                />
              </div>
              <div>
                <Checkbox onChange={(e) => onChangeCheckBox(e, 3)}>
                  Buổi tối: {obj.evening.hourMorningStart || "18"}:
                  {obj.evening.miMorningStart || "30"} -{" "}
                  {obj.evening.hourMorningEnd || "22"}:
                  {obj.evening.miMorningEnd || "00"}
                </Checkbox>
                <Slider
                  style={{ marginTop: "20px" }}
                  onChange={(value) => onChange(value, 3)}
                  disabled={!checkBoxs.evening}
                  range
                  min={1800}
                  max={2400}
                  step={null}
                  tooltip={{ open: false }}
                  marks={{
                    1800: "18:00",
                    1850: "18:30",
                    1900: "19:00",
                    1950: "19:30",
                    2000: "20:00",
                    2050: "20:30",
                    2100: "21:00",
                    2150: "21:30",
                    2200: "22:00",
                    2250: "22:30",
                    2300: "23:00",
                    2350: "23:30",
                    2400: "24:00",
                  }}
                  defaultValue={[1850, 2200]}
                />
              </div>
            </div>
            <div style={{ marginTop: "40px" }}>
              <div className={classes.timeBreak}>
                <span>Thời gian nghỉ giữa 2 đơn đặt</span>
                <Tooltip
                  placement="right"
                  title={"Thời gian nghỉ giữa 2 đơn đặt"}
                >
                  <InfoCircleOutlined style={{ color: "#1FCBA2" }} />
                </Tooltip>
              </div>
              <div>
                <Select
                  style={{ width: "100%" }}
                  size="large"
                  onChange={onChangeSelectBreak}
                  defaultValue=""
                >
                  <Option value="">--- Chọn ---</Option>
                  <Option value={"30"}>30 phút</Option>
                  <Option value={"60"}>60 phút</Option>
                  <Option value={"90"}>90 phút</Option>
                </Select>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div style={{ textAlign: "right", marginTop: "16px" }}>
        <Button
          onClick={handleSubmit}
          style={{ width: "150px" }}
          size="large"
          type="primary"
          loading={loadingBtn}
        >
          Tiếp tục
        </Button>
      </div>
    </section>
  );
}
