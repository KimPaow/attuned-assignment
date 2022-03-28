import { useEffect, useState } from "react";
import { userPrefersDark } from "@/helpers/get-preferred-color-scheme";
import { Window as window } from "@/helpers/server-safe-globals";

export const usePrefersDarkMode = () => {
  const [prefersDark, setPrefersDark] = useState(userPrefersDark);

  useEffect(() => {
    const handlePreferenceChange = () => setPrefersDark(!prefersDark);

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handlePreferenceChange);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handlePreferenceChange);
    };
  }, [prefersDark]);

  return prefersDark;
};

export default usePrefersDarkMode;
