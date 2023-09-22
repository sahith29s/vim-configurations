import React, { useState } from 'react';
import { TreeView, TreeItem } from '@mui/lab';
import { makeStyles } from '@mui/styles';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 400,
    },
});

const FileExplorer = ({ data }) => {
    const classes = useStyles();
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelect = (_, value) => {
        setSelectedItem(value);
    };

    const renderTree = (items) => (
        <TreeItem key={items.name} nodeId={items.name} label={items.name} icon={items.type === 'folder' ? <FolderIcon /> : <InsertDriveFileIcon />}>
            {Array.isArray(items.children) ? items.children.map((item) => renderTree(item)) : null}
        </TreeItem>
    );

    return (
        <div className={classes.root}>
            <h1>File Explorer</h1>
            <TreeView
                defaultCollapseIcon={<FolderIcon />}
                defaultExpandIcon={<FolderIcon />}
                selected={selectedItem}
                onNodeSelect={handleSelect}
            >
                {renderTree(data)}
            </TreeView>
            {selectedItem && selectedItem.type === 'file' && (
                <p>You selected a file: {selectedItem.name}</p>
            )}
        </div>
    );
};

export default FileExplorer;

