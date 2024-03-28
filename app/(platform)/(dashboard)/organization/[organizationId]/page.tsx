import { create } from "@/actions/create-boards";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { Board } from "./board";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <form action={create}>
        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="p-1 border border-black"
        />
        <Button type="submit">Create</Button>
      </form>
      <div className="space-y-2">
        {boards.map((board) => (
          <Board key={board.id} {...board} />
        ))}
      </div>
    </div>
  );
};
export default OrganizationIdPage;
