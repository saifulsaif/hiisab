import React from "react";

const ChatList = (props) => {
  return (
    <div class="d-flex p-2">
      <input
        class="avatar avatar-sm rounded-circle"
        type="image"
        alt="photo"
        src="https://ownlikee.ownmat.com/image/user/profile_image/1726930455799967.jpg"
      />
      <div class="ms-3">
        <h6 class="mb-0">{props.chat.name}</h6>
        <p class="text-muted text-xs mb-2">1 hour ago</p>
        <span class="text-muted text-sm col-11 p-0 text-truncate d-block">
          Computer users and programmers
        </span>
      </div>
    </div>
  );
};

export default ChatList;
