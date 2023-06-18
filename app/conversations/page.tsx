"use client";

import clsx from "clsx";

import useConversation from "../hooks/useConversation";
import EmptyState from "../components/EmptyState";
import getConversations from "../actions/getConversations";
import { useSession } from "next-auth/react";

const Home = () => {
  const { isOpen } = useConversation();
  const session = useSession();
  console.log("Session => ", session);
  return (
    <div
      className={clsx("lg:pl-80 h-full lg:block", isOpen ? "block" : "hidden")}
    >
      <EmptyState />
    </div>
  );
};
export default Home;
