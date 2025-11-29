import { useEffect, useState } from 'react';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import { Check, Delete, Edit, MessagesSquareIcon, User, X } from 'lucide-react';
import InputField from '../../ui/InputField';
import {
  deleteUserComment,
  editUserComment,
  getPropertyComments,
  postComment,
} from '../../services/commentsService';
import type { CommentResponse } from '../../types/Responses';
import { useAuth } from '../../context/AuthContext';
import type { UserProfile } from '../../types/User';
import { getUserById } from '../../services/ProfileService';

type CommentProps = {
  id: string;
};

const Comments = ({ id }: CommentProps) => {
  const [commentText, setCommentText] = useState('');
  const [editCommentId, setEditCommentId] = useState<any | null>(null);
  const [editValue, setEditValue] = useState('');
  const [comments, setComments] = useState<CommentResponse[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const getUserData = async (id: any) => {
      const uData = await getUserById(id);
      setUserData(uData.data);
    };
    getUserData(user?.userId);
  }, []);
  // Fetch comments
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPropertyComments(id);
      setComments(data || []);
    };
    fetchData();
  }, [id, refresh]);

  // Add comment
  const handleAddComment = async () => {
    if (!commentText.trim()) return;

    try {
      await postComment({
        commentText,
        propertyId: id,
      });

      setCommentText('');
      setRefresh((prev) => !prev);
    } catch (err) {
      console.error('Failed to post comment:', err);
    }
  };

  // Edit comment
  const handleEditComment = async (id: any) => {
    try {
      await editUserComment(id, editValue);
      setEditCommentId(null);
      setEditValue('');
      setRefresh((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };

  // Delete comment
  const handleDeleteComment = async (id: any) => {
    try {
      await deleteUserComment(id);
      setRefresh((prev) => !prev);
    } catch (err) {
      console.log(err);
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
            placeholder="Write a comment..."
            className="p-6 bg-white text-black border-gray-300 outline-none"
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
          comments.map((item) => (
            <div
              key={item.commentId}
              className="flex items-center gap-2 border border-gray-200 rounded-md p-2 bg-gray-50 relative"
            >
              <div className="text-2xl flex items-center mr-2.5 gap-1">
                <User className="text-blue-500" />
                <span className="text-sm">{userData?.username}:</span>
              </div>

              {editCommentId === item.commentId ? (
                <Input
                  value={editValue}
                  className="w-[60%] outline-none"
                  onChange={(e) => setEditValue(e.target.value)}
                />
              ) : (
                <p className="text-sm font-medium text-gray-800">{item.commentText}</p>
              )}

              <span className="absolute cursor-pointer flex right-8 md:right-10 lg:right-20 text-gray-500 gap-2">
                {editCommentId === item.commentId ? (
                  <>
                    <Check onClick={() => handleEditComment(item.commentId)} />
                    <X onClick={() => setEditCommentId(null)} />
                  </>
                ) : (
                  user?.userId == item.userID && (
                    <>
                      <Edit
                        size={16}
                        onClick={() => {
                          setEditCommentId(item.commentId);
                          setEditValue(item.commentText);
                        }}
                      />
                      <Delete size={16} onClick={() => handleDeleteComment(item.commentId)} />
                    </>
                  )
                )}
              </span>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Comments;
