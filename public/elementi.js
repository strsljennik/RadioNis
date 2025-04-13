document.addEventListener("DOMContentLoaded", () => {
    const chatButton = document.getElementById("chat");
    const chatInput = document.getElementById("chatInput");
    const messageAreaContainer = document.getElementById("messageAreaContainer");
    const guestListContainer = document.getElementById("guestListContainer");
    const openModalButton = document.getElementById("openModal");
    const smilesButton = document.getElementById("smilesBtn");
    const gButton = document.getElementById("GBtn");

    let isDraggable = false;
    let isResizable = false;

    chatButton.addEventListener("click", () => {
        isDraggable = !isDraggable;
        isResizable = !isResizable;

        // Apply to all elements (buttons, chat containers)
        const elements = [
         chatInput, messageAreaContainer, guestListContainer, openModalButton, smilesButton, gButton
        ];

        elements.forEach(element => {
            element.style.cursor = isDraggable ? "grab" : isResizable ? "se-resize" : "default";
        });

        if (isDraggable || isResizable) {
            elements.forEach(element => {
                element.addEventListener("mousedown", startAction);
            });
        } else {
            elements.forEach(element => {
                element.removeEventListener("mousedown", startAction);
            });
        }
    });

    function startAction(event) {
        if (isResizable && isInResizeZone(event)) {
            startResize(event);
        } else if (isDraggable) {
            startDrag(event);
        }
    }

    function isInResizeZone(event) {
        const rect = event.target.getBoundingClientRect();
        return event.clientX > rect.right - 10 && event.clientY > rect.bottom - 10;
    }

    function startDrag(event) {
        const offsetX = event.clientX - event.target.offsetLeft;
        const offsetY = event.clientY - event.target.offsetTop;

        function move(event) {
            const x = event.clientX - offsetX;
            const y = event.clientY - offsetY;
            event.target.style.left = `${x}px`;
            event.target.style.top = `${y}px`;
        }

        function stopDrag() {
            document.removeEventListener("mousemove", move);
            document.removeEventListener("mouseup", stopDrag);
        }

        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", stopDrag);
    }

    function startResize(event) {
        const target = event.target;
        const startX = event.clientX;
        const startY = event.clientY;
        const startWidth = target.offsetWidth;
        const startHeight = target.offsetHeight;

        function resize(event) {
            const width = startWidth + (event.clientX - startX);
            const height = startHeight + (event.clientY - startY);
            target.style.width = `${width}px`;
            target.style.height = `${height}px`;
        }

        function stopResize() {
            document.removeEventListener("mousemove", resize);
            document.removeEventListener("mouseup", stopResize);
        }

        document.addEventListener("mousemove", resize);
        document.addEventListener("mouseup", stopResize);
    }
});
