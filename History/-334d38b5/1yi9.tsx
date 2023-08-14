import React from 'react';

const InputField = ({ label, type, value, onChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            />
        </div>
    );
};

export default InputField;
