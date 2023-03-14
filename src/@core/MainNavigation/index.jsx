import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import { router } from "routes";

const Page = () => {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default Page;
