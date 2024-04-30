import React from "react";
import { Select } from "antd";
import { useLanguages } from "./useLanguages";
import styles from "./GameFilters.module.scss";
import { useFilters } from "./useFilters";

export const GameFilters: React.FC = () => {
  const { languages } = useLanguages();
  const { languages: filteredLanguages, setLanguages } = useFilters();

  return (
    <div className={styles.filters}>
      <Select
        mode="multiple"
        options={languages}
        placeholder="Выберите язык"
        onChange={setLanguages}
        value={filteredLanguages}
      />
    </div>
  );
};
