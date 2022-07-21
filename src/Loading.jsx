import React from "react";
import { Spinner } from "@chakra-ui/react";

function Loading({ loading }) {
  return <>{loading && <Spinner size="xl"/>}</>;
}

export default Loading;
