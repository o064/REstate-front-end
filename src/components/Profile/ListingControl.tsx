import { Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';

function ListingControl({ id }: { id: string }) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);

  const handleDelete = () => {
    setShowDeleteConfirm(false);
  };
  return (
    <div className="flex items-center space-x-2">
      {!showDeleteConfirm ? (
        <>
          <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50 flex items-center space-x-1">
            <Edit className="h-4 w-4" />
            <span>Edit</span>
          </button>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="px-3 py-1.5 text-sm border border-red-200 text-red-600 rounded-md hover:bg-red-50 flex items-center space-x-1"
          >
            <Trash2 className="h-4 w-4" />
            <span>Delete</span>
          </button>
        </>
      ) : (
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Are you sure?</span>
          <button
            onClick={handleDelete}
            className="px-3 py-1.5 text-sm bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Confirm
          </button>
          <button
            onClick={() => setShowDeleteConfirm(false)}
            className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default ListingControl;
