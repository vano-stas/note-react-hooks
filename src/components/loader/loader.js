import React from 'react';

const Loader = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loader;