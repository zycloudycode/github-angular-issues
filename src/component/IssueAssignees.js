import React from "react";

import { UserLoginWithAvatar } from "./UserLoginWithAvatar";

export const IssueAssignees = ({ assignees }) => (
  <div>
    {
      assignees.map(({ login, avatar_url }, index) => (
        <UserLoginWithAvatar key={index} login={login} avatar_url={avatar_url} />
      ))
    }
  </div>
);
