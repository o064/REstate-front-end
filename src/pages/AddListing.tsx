import BasicInfoStep from '../components/AddListing/BasicInfoStep';
import DescriptionAmenitiesStep from '../components/AddListing/DescriptionAmenitiesStep';
import LocationStep from '../components/AddListing/LocationStep';
import PricePropertyDetailsStep from '../components/AddListing/PricePropertyDetailsStep';

function AddListing() {
  const step = 0;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Create New Listing</h1>
            <div className="text-sm text-gray-500">Step {step} of 6</div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 6) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Content */}
        <form className="bg-white rounded-lg shadow-sm p-6">
          {/* step information */}
          <DescriptionAmenitiesStep />
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
              Previous
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddListing;
