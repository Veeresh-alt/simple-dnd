// src/index.js

/**
 * @param {Object} options - Options for drag-and-drop behavior.
 * @param {any} options.drop - The target element for drop events.
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
    drop?.current?.addEventListener('dragover', handleDragOver);
    drop?.current?.addEventListener('drop', handleDrop);
    drop?.current?.addEventListener('dragenter', handleDragEnter);
    drop?.current?.addEventListener('dragleave', handleDragLeave);

    return () => {
        drop?.current?.removeEventListener('dragover', handleDragOver);
        drop?.current?.removeEventListener('drop', handleDrop);
        drop?.current?.removeEventListener('dragenter', handleDragEnter);
        drop?.current?.removeEventListener('dragleave', handleDragLeave);
    };
}
