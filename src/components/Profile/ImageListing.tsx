function ImageListing({ imageUrl, imageName }: { imageUrl: string; imageName?: string }) {
  return (
    <div className="w-full sm:w-48 h-32 flex-shrink-0">
      <img src={imageUrl} alt={imageName} className="w-full h-full object-cover rounded-lg" />
    </div>
  );
}

export default ImageListing;
