import React from 'react';
import './loadMoreButton.css';  

const LoadMoreButton = ({ loadMore, hasMore }) => {
  return (
    <div className="load-more-container">
      <button id="load-more" onClick={loadMore} disabled={!hasMore}>
        {hasMore ? "Load More" : "No More Content"}
      </button>
    </div>
  );
};

export default LoadMoreButton;
