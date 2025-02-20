import secureLocalStorage from "react-secure-storage";

export function addToken(token) {
  secureLocalStorage.setItem(
    `${import.meta.env.VITE_SECURE_LOCAL_STORAGE_PREFIX}`,
    token
  );
}

export function getToken() {
  const token = secureLocalStorage.getItem(
    `${import.meta.env.VITE_SECURE_LOCAL_STORAGE_PREFIX}`
  );
  return token;
}

export function removeToken() {
  secureLocalStorage.removeItem(
    `${import.meta.env.VITE_SECURE_LOCAL_STORAGE_PREFIX}`
  );
}
