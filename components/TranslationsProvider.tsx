"use client";
import i18n from "@/localization/i18n";
import React from "react";
import { I18nextProvider } from "react-i18next";
function TranslationsProvider({ children }: { children: React.ReactNode }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

export default TranslationsProvider;
