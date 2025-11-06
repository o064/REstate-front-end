import { Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';
import Button from '../../ui/Button';
import { useDeleteProperty } from '../../hooks/useProperty';

function ListingControl({
  propertyId,
  propertyType,
}: {
  propertyId: string;
  propertyType: number;
}) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);
  const { mutate: delProperty, isError } = useDeleteProperty();
  const handleDelete = () => {
    delProperty({ propertyId, propertyType });
  };
  if (isError) {
    return <p>error while delete </p>;
  }
  return (
    <div className="flex items-center space-x-2">
      {!showDeleteConfirm ? (
        <>
          <Button
            to={`/edit/property/${propertyType == 0 ? 'residential' : 'commerical'}/${propertyId}`}
            size="small"
            variant="secondary"
            fullWidth={false}
          >
            <Edit className="h-4 w-4" />
            <span>Edit</span>
          </Button>
          <Button
            onClick={() => setShowDeleteConfirm(true)}
            size="small"
            variant="transDestructive"
            fullWidth={false}
          >
            <Trash2 className="h-4 w-4" />
            <span>Delete</span>
          </Button>
        </>
      ) : (
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Are you sure?</span>
          <Button
            onClick={() => setShowDeleteConfirm(false)}
            size="small"
            variant="secondary"
            fullWidth={false}
          >
            Cancel
          </Button>
          <Button onClick={handleDelete} variant="destructive" fullWidth={false} size="small">
            Confirm
          </Button>
        </div>
      )}
    </div>
  );
}

export default ListingControl;
