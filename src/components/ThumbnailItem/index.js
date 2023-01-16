import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onUpdateImage, isActive} = props
  const {
    id,
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
  } = imageDetails

  const onChangeImage = () => {
    onUpdateImage(id, imageUrl, imageAltText)
  }

  const isActiveImageElement = isActive ? 'active-image' : 'non-active-image'

  return (
    <li className={`list-item ${isActiveImageElement}`}>
      <img
        src={thumbnailUrl}
        alt={thumbnailAltText}
        className="image-url"
        onClick={onChangeImage}
      />
    </li>
  )
}

export default ThumbnailItem
