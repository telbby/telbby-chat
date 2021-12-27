import React, { memo } from 'react';
import { useTheme } from '@emotion/react';
import {
  chatItemWrapperStyle,
  chatAdminNameStyle,
  chatContentStyle,
} from './style';

interface ChatItemProps {
  content: string;
  fromAdmin: boolean;
  adminName?: string;
  image?: string;
}

const ChatItem = memo<ChatItemProps>(
  ({ adminName, content, fromAdmin, image }) => {
    const theme = useTheme();

    return (
      <div css={chatItemWrapperStyle(theme, fromAdmin)}>
        {image && <img src={image} alt="채팅 로고 이미지" />}
        <div>
          {adminName && <div css={chatAdminNameStyle}>{adminName}</div>}
          <div css={chatContentStyle(theme, fromAdmin)}>{content}</div>
        </div>
      </div>
    );
  },
);

ChatItem.displayName = 'ChatItem';

export default ChatItem;
