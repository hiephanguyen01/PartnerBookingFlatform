"use client";
import React, { useEffect, useState } from "react";
import style from "./rating.module.scss";
import { Tabs } from "antd";
import TabRating from "./components/TabRating/TabRating";
import { ratingService } from "@/services/RatingService";
const Rating = () => {
  const [keyCurrent, setKeyCurrent] = useState(1);
  const [tabData, setTabData] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChange = (key) => {
    setKeyCurrent(key);
  };
  useEffect(() => {
    if (isModalOpen === false) {
      (async () => {
        const { data } = await ratingService.getAllRatingPartner(keyCurrent);
        setTabData(data);
      })();
    }
  }, [keyCurrent, isModalOpen]);

  return (
    <div className={style.rating + " rating"}>
      <div className={style.selectTabs}>
        <Tabs
          onChange={onChange}
          defaultActiveKey={1}
          items={[
            {
              label: "Studio",
              key: 1,
              children: (
                <TabRating
                  category={keyCurrent}
                  data={tabData}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              ),
            },
            {
              label: "Nhiếp ảnh",
              key: 2,
              children: (
                <TabRating
                  category={keyCurrent}
                  data={tabData}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              ),
            },
            {
              label: "Trang điểm",
              key: 4,
              children: (
                <TabRating
                  category={keyCurrent}
                  data={tabData}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              ),
            },
            {
              label: "Người mẫu",
              key: 6,
              children: (
                <TabRating
                  category={keyCurrent}
                  data={tabData}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Rating;
