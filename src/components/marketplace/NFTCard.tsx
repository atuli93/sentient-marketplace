import React from "react";
import "./NFTCard.css"; // make sure this points to your CSS

interface NFTCardProps {
  image: string;
  title: string;
  collection: string;
  price: number;
  likes: number;
}

const NFTCard: React.FC<NFTCardProps> = ({ image, title, collection, price, likes }) => {
  return (
    <div className="nft-card">
      <div className="nft-image-container">
        <img src={image} alt={title} className="nft-image" />
        <div className="nft-overlay">
          <span className="nft-price">{price} ETH</span>
        </div>
      </div>
      <div className="nft-details">
        <h3 className="nft-title">{title}</h3>
        <p className="nft-collection">{collection}</p>
        <div className="nft-footer">
          <span className="nft-price-small">{price} ETH</span>
          <span className="nft-likes">❤️ {likes}</span>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
