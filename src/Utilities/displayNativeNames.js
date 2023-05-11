export const displayNativeNames = (obj) => {
  if (!obj.nativeName) return "";

  const nativeNames = Array.isArray(obj.nativeName)
    ? obj.nativeName
    : Object.values(obj.nativeName);

  return nativeNames.map((name) => name.common).join(", ");
};
