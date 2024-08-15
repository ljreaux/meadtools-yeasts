"use client";
import { useTranslation } from "react-i18next";

function Translate({ accessor }: { accessor: string }) {
  const { t } = useTranslation();
  return <span>{t(accessor)}</span>;
}

export default Translate;
