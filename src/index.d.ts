// src/index.d.ts

declare module 'kali-dnd' {
    interface DragAndDropOptions {
        // Define options and types specific to your module
    }

    type RemoveListeners = () => void;

    const dragAndDrop: (options: DragAndDropOptions) => RemoveListeners;

    export default dragAndDrop;
}
