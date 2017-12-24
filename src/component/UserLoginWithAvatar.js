import React from "react";
import Avatar from "material-ui/Avatar";

export const UserLoginWithAvatar = ({ login, avatar_url }) => (
  <span>
    <Avatar src={avatar_url}/>
    {login}
  </span>
);
