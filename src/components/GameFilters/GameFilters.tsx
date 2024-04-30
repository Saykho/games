import React from "react";
import { Select } from "antd";
import { useLanguages } from "./useLanguages";
import styles from "./GameFilters.module.scss";
import { useFilters } from "./useFilters";
import { usePlatforms } from "./usePlatforms";

export const GameFilters: React.FC = () => {
  const { languages } = useLanguages();
  const { platforms } = usePlatforms();
  const {
    languages: filteredLanguages,
    setLanguages,
    platforms: filteredPlatforms,
    setPlatforms,
  } = useFilters();

  return (
    <div className={styles.filters}>
      <Select
        mode="multiple"
        options={languages}
        placeholder="Выберите язык"
        onChange={setLanguages}
        value={filteredLanguages}
      />

      <Select
        mode="multiple"
        options={platforms}
        placeholder="Выберите платформу"
        onChange={setPlatforms}
        value={filteredPlatforms}
      />
    </div>
  );
};
