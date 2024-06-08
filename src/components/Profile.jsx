import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fake API call using JSONPlaceholder
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(response => {
                setUserData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Something went wrong!');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
            <div className="flex items-center space-x-4">
                <img
                    src={`https://robohash.org/${userData.id}.png?size=150x150`}
                    alt="Profile"
                    className="w-32 h-32 rounded-full"
                />
                <div>
                    <h1 className="text-2xl font-bold">{userData.name}</h1>
                    <p className="text-gray-600">{userData.email}</p>
                    <p className="text-gray-600">{userData.phone}</p>
                    <p className="text-gray-600">{userData.gender}</p>
                </div>
            </div>
            <div className="mt-5">
                <h2 className="text-xl font-semibold">Address</h2>
                <p className="text-gray-600">{userData.address.street}, {userData.address.suite}</p>
                <p className="text-gray-600">{userData.address.city}, {userData.address.zipcode}</p>
            </div>
            <div className="mt-5">
                <h2 className="text-xl font-semibold">Company</h2>
                <p className="text-gray-600">{userData.company.name}</p>
                <p className="text-gray-600">{userData.company.catchPhrase}</p>
                <p className="text-gray-600">{userData.company.bs}</p>
            </div>
        </div>
    );
};

export default Profile;
