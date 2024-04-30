import React from "react";
import { Button, Form, InputNumber, Select } from "antd";
import { useTranslation } from "react-i18next";
import { useLanguages } from "./useLanguages";
import styles from "./GameFilters.module.scss";
import { useFilters } from "./useFilters";
import { usePlatforms } from "./usePlatforms";
import { Multiplayer } from "../../models";

export const GameFilters: React.FC = () => {
  const { t } = useTranslation();
  const { languages } = useLanguages();
  const { platforms } = usePlatforms();
  const {
    languages: filteredLanguages,
    setLanguages,
    platforms: filteredPlatforms,
    setPlatforms,
    multiplayer: filteredMultiplayer,
    setMultiplayer,
  } = useFilters();

  return (
    <div className={styles.filters}>
      <div className={styles.selectFilters}>
        <Select
          mode="multiple"
          options={languages}
          placeholder="Выберите язык"
          onChange={setLanguages}
          value={filteredLanguages}
          className={styles.select}
        />

        <Select
          mode="multiple"
          options={platforms}
          placeholder="Выберите платформу"
          onChange={setPlatforms}
          value={filteredPlatforms}
          className={styles.select}
        />
      </div>
      <Form<Multiplayer>
        onFinish={setMultiplayer}
        initialValues={filteredMultiplayer}
        requiredMark="optional"
        className={styles.form}
      >
        <Form.Item<number>
          label={t("gameFilters.online")}
          name="online"
          rules={[{ required: true, message: "" }]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item<number>
          label={t("gameFilters.offline")}
          name="offline"
          rules={[{ required: true, message: "" }]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Button htmlType="submit">{t("gameFilters.applyMultiplayer")}</Button>
      </Form>
    </div>
  );
};
