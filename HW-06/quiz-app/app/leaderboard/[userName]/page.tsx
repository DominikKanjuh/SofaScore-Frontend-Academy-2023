import React from "react";

export default function User({ params }: { params: { userName: string } }) {
  return <div>{`User is: ${params.userName}`}</div>;
}
