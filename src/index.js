// src/index.js

/**
 * @param {Object} options - Options for drag-and-drop behavior.
 * @param {HTMLElement} options.drop - The target element for drop events.
 * @param {Function} options.handleDragOver - Callback for dragover events.
 * @param {Function} options.handleDrop - Callback for drop events.
 * @param {Function} options.handleDragEnter - Callback for dragenter events.
 * @param {Function} options.handleDragLeave - Callback for dragleave events.
 * @returns {Function} - A function to remove event listeners.
 */
export default function dragAndDrop({
    drop,
    handleDragOver,
    handleDrop,
    handleDragEnter,
    handleDragLeave,
}) {
    drop.addEventListener('dragover', handleDragOver);
    drop.addEventListener('drop', handleDrop);
    drop.addEventListener('dragenter', handleDragEnter);
    drop.addEventListener('dragleave', handleDragLeave);

    return () => {
        drop.removeEventListener('dragover', handleDragOver);
        drop.removeEventListener('drop', handleDrop);
        drop.removeEventListener('dragenter', handleDragEnter);
        drop.removeEventListener('dragleave', handleDragLeave);
    };
}
