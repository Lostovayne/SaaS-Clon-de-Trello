import { deleteBoard } from "@/actions/delete-boards";
import { Button } from "@/components/ui/button";

interface BoardProps {
  title: string;
  id: string;
}

export const Board = ({ title, id }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);

  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>Board title:{title}</p>
      <Button variant={"destructive"} size={"sm"} type="submit" className="">
        Delete
      </Button>
    </form>
  );
};
