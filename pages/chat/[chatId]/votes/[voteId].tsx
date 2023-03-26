import { useRouter } from "next/router";

const VoteDetail = () => {
  const router = useRouter();
  const { chatId, voteId } = router.query

  return (
    <div>
      Page du détail du vote { voteId } sur le chat n° { chatId }.
    </div>
  );
};

export default VoteDetail;