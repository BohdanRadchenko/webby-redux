import React from 'react';

export const LoadMore = ({handleMoreClick}) => {
  return (
    <div className='row'>
      <button className="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={handleMoreClick}>
        Load more
      </button>
    </div>
  );
};