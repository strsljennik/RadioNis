document.addEventListener("DOMContentLoaded", () => {
    const chatButton = document.getElementById("chat");
    const chatContainer = document.getElementById("chatContainer");
    const chatInput = document.getElementById("chatInput");
    let isDraggable = false;
    let isResizable = false;

    chatButton.addEventListener("click", () => {
        isDraggable = !isDraggable;
        isResizable = !isResizable;
        chatContainer.style.cursor = isDraggable ? "grab" : isResizable ? "se-resize" : "default";
        chatInput.style.cursor = isDraggable ? "grab" : isResizable ? "se-resize" : "default";

        if (isDraggable || isResizable) {
            chatContainer.addEventListener("mousedown", startAction);
            chatInput.addEventListener("mousedown", startAction);
        } else {
            chatContainer.removeEventListener("mousedown", startAction);
            chatInput.removeEventListener("mousedown", startAction);
        }
    });

    function startAction(event) {
        if (isResizable && isInResizeZone(event, chatInput)) {
            startResize(event, chatInput);
        } else if (isDraggable) {
            startDrag(event);
        }
    }

    function isInResizeZone(event, element) {
        const rect = element.getBoundingClientRect();
        return event.clientX > rect.right - 10 && event.clientY > rect.bottom - 10;
    }

    function startDrag(event) {
        const offsetX = event.clientX - chatContainer.offsetLeft;
        const offsetY = event.clientY - chatContainer.offsetTop;

        function move(event) {
            const x = event.clientX - offsetX;
            const y = event.clientY - offsetY;
            chatContainer.style.left = `${x}px`;
            chatContainer.style.top = `${y}px`;
        }

        function stopDrag() {
            document.removeEventListener("mousemove", move);
            document.removeEventListener("mouseup", stopDrag);
        }

        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", stopDrag);
    }

    function startResize(event, element) {
        const startX = event.clientX;
        const startY = event.clientY;
        const startWidth = element.offsetWidth;
        const startHeight = element.offsetHeight;

        function resize(event) {
            const width = startWidth + (event.clientX - startX);
            const height = startHeight + (event.clientY - startY);
            element.style.width = `${width}px`;
            element.style.height = `${height}px`;
        }

        function stopResize() {
            document.removeEventListener("mousemove", resize);
            document.removeEventListener("mouseup", stopResize);
        }

        document.addEventListener("mousemove", resize);
        document.addEventListener("mouseup", stopResize);
    }
});
