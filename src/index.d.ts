// src/index.d.ts

declare module 'kali-dnd' {
    interface DragAndDropOptions {
        // Define options and types specific to your module
        drop: any; // The target element for drop events
        handleDragOver: (event: DragEvent) => void; // Callback for dragover events
        handleDrop: (event: DragEvent) => void; // Callback for drop events
        handleDragEnter: (event: DragEvent) => void; // Callback for dragenter events
        handleDragLeave: (event: DragEvent) => void; // Callback for dragleave events
    }

    type RemoveListeners = () => void;

    const dragAndDrop: (options: DragAndDropOptions) => RemoveListeners;

    export default dragAndDrop;
}

