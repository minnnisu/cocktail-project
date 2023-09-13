import React, { createContext, useState, useMemo, useId } from "react";

const userData = localStorage.getItem("id");

export const AuthContext = createContext(
  userData ? JSON.parse(userData).userId : null
);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    userData ? JSON.parse(userData).userId : null
  );

  function login(userid) {
    localStorage.setItem("id", JSON.stringify({ userid }));
    setUser(userid);
  }

  function logout() {
    localStorage.removeItem("id");
    setUser(false);
  }

  // useMemo로 캐싱하지 않으면 value가 바뀔 때마다 state를 사용하는 모든 컴포넌트가 매번 리렌더링됨
  const value = useMemo(() => ({ user, login, logout }), [user, setUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
