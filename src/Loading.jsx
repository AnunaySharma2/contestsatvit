import React from "react";
import { Spinner } from "@chakra-ui/react";

function Loading({ loading }) {
  return <>{loading && <Spinner/>}</>;
}

export default Loading;
