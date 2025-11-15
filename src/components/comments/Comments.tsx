import { useEffect, useState } from 'react';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import { MessagesSquareIcon, User } from 'lucide-react';
import InputField from '../../ui/InputField';
import { useUserProfile } from '../../hooks/useProfile';
import { destructUserProfile } from '../../utils/helper';
import { getPropertyComments, postComment } from '../../services/commentsService';
import type { CommentResponse } from '../../types/Responses';

type CommentProps = {
  id: string;
};

const Comments = ({ id }: CommentProps) => {
  const [commentText, setCommentText] = useState('');

  const [comments, setComments] = useState<CommentResponse[]>([]);

  const { data } = useUserProfile();
  const { user } = destructUserProfile(data);

  useEffect(() => {
    const getComments = async () => {
      const { data } = await getPropertyComments(id);
      setComments(data || []);
    };
    getComments();
  }, [id]);

  const handleAddComment = async () => {
    if (!commentText.trim()) return;

    try {
      const newComment = {
        commentText: commentText,
        propertyId: id,
        userId: user?.userId,
      };

      const res = await postComment(newComment);

      if (res.isSuccess) {
        setComments((prev: any) => [...prev, { text: commentText, userName: user?.username }]);
        setCommentText('');
      }
    } catch (err) {
      console.error('Failed to post comment:', err);
    }
  };

  return (
    <section className="mb-36">
      {/* Input Box */}
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
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
        </InputField>
      </div>

      {/* Comments List */}
      <div className="p-2.5 border-2 border-gray-400 h-72 overflow-y-auto space-y-2 mt-6 rounded-lg">
        {comments.length === 0 ? (
          <p className="text-gray-500 text-center mt-8">No comments yet.</p>
        ) : (
          comments.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 border border-gray-200 rounded-md p-2 bg-gray-50"
            >
              <div className="text-2xl flex items-center mr-2.5 gap-1">
                <User className="text-blue-500" />
                <span className="text-sm">{user?.username}:</span>
              </div>
              <p className="text-sm font-medium text-gray-800">{item.commentText}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Comments;
