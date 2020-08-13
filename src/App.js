import React from "react";
import "./App.css";
import Root from "./Root";
import ErrorBoundary from "./ErrorBoundary";
import { AuthProvider } from "./context/AuthContext";
import { PasswordProvider } from "./context/password/PasswordAuthContext";

import "bootstrap/dist/css/bootstrap.min.css";

import "antd/dist/antd.css";
import { DepartmentProvider } from "./context/department/DepartmentProvider";

function App() {
  return (
    <>
      <ErrorBoundary>
        <AuthProvider>
          <PasswordProvider>
            <DepartmentProvider>
              <Root />
            </DepartmentProvider>
          </PasswordProvider>
        </AuthProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
