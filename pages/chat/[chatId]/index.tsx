import { useRouter } from "next/router";

const ChatDetail = () => {
  const router = useRouter();
  // Accesses to the chat id route parameter
  const chatId = router.query.chatId; // the name chatId in router.query.chatId must be identical to the file name

  return (
    <div>
      Page détail du chat {chatId}
    </div>
  );
};

export default ChatDetail;