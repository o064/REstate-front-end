import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import InputField from "../Form/InputField";
import { MessagesSquareIcon, User } from "lucide-react";

type CommentProps = {
  comment: string[];
  Func: (comments: string[]) => void;
};

const Comments = ({ comment, Func }: CommentProps) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    Func([...comment, newComment.trim()]);
    setNewComment("");
  };

  return (
    <section className="mb-36">
      <div className="relative">
        <InputField id="comment">
          <Button
            onClick={handleAddComment}
            className="absolute right-2 top-2.5 w-fit text-sm md:text-lg"
            icon={<MessagesSquareIcon />}
          >
            Add Comment
          </Button>

          <Input
            type="text"
            id="comment"
            name="comment"
            placeholder="Write a comment..."
            className="p-6 bg-white placeholder:text-gray-500 placeholder:md:text-lg text-black border-gray-300 outline-none"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </InputField>
      </div>

      <div className="p-2.5 border-2 border-gray-400 h-72 overflow-y-auto space-y-2 mt-6 rounded-lg">
        {comment.length === 0 ? (
          <p className="text-gray-500 text-center mt-8">No comments yet.</p>
        ) : (
          comment.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 border border-gray-200 rounded-md p-2 bg-gray-50"
            >
              <span className="text-2xl"><User className="text-blue-500" /></span>
              <p className="text-sm font-medium text-gray-800">{item}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Comments;
