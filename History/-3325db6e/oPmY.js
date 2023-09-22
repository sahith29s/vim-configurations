import React, { useState } from 'react';

const FileExplorer = ({ data }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelect = (event) => {
        const selectedItem = JSON.parse(event.target.value);
        setSelectedItem(selectedItem);
    };

    return (
        <div>
            <h1>Dropdown File Explorer</h1>
            <select onChange={handleSelect}>
                <option value="">Select a file or folder</option>
                {data.map((item, index) => (
                    <option key={index} value={JSON.stringify(item)}>
                        {item.name}
                    </option>
                ))}
            </select>

            {selectedItem && selectedItem.type === 'folder' && (
                <FileExplorer data={selectedItem.children} />
            )}

            {selectedItem && selectedItem.type === 'file' && (
                <p>You selected a file: {selectedItem.name}</p>
            )}
        </div>
    );
};

export default FileExplorer;
