
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center justify-center text-yellow-500">
            {Array(fullStars).fill(<FaStar />)}
            {hasHalfStar && <FaStarHalfAlt />}
            {Array(emptyStars).fill(<FaRegStar />)}
        </div>
    );
};

export default StarRating;
