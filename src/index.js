export default DragNDrop = ({ drop, handleDragOver, handleDrop, handleDragEnter, handleDragLeave }) => {
    drop.current.addEventListener('dragover', handleDragOver);
    drop.current.addEventListener('drop', handleDrop);
    drop.current.addEventListener('dragenter', handleDragEnter);
    drop.current.addEventListener('dragleave', handleDragLeave);
    return () => {
        drop.current.removeEventListener('dragover', handleDragOver)
        drop.current.removeEventListener('drop', handleDrop)
        drop.current.removeEventListener('dragenter', handleDragEnter)
        drop.current.removeEventListener('dragleave', handleDragLeave);
    }
}