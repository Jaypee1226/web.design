// script.js
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const sliderHandle = document.getElementById('slider-handle');
    const sliderText = document.getElementById('slider-text');
    const mainContent = document.getElementById('main-content');
    const unlockContainer = document.getElementById('unlock-container');
    let isDragging = false;
    let startX;
    let currentX;
    let sliderWidth;

    sliderHandle.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX;
        sliderWidth = slider.offsetWidth;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    const onMouseMove = (e) => {
        if (isDragging) {
            currentX = e.pageX;
            let offsetX = currentX - startX;
            if (offsetX > 0 && offsetX < sliderWidth - sliderHandle.offsetWidth) {
                sliderHandle.style.left = `${offsetX}px`;
                sliderText.style.opacity = `${1 - offsetX / (sliderWidth - sliderHandle.offsetWidth)}`;
            } else if (offsetX >= sliderWidth - sliderHandle.offsetWidth) {
                unlock();
            }
        }
    };

    const onMouseUp = () => {
        if (isDragging) {
            isDragging = false;
            if (parseInt(sliderHandle.style.left) < sliderWidth - sliderHandle.offsetWidth) {
                sliderHandle.style.left = '0';
                sliderText.style.opacity = '1';
            }
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    };

    const unlock = () => {
        sliderHandle.style.left = `${sliderWidth - sliderHandle.offsetWidth}px`;
        sliderText.style.opacity = '0';
        setTimeout(() => {
            unlockContainer.style.display = 'none';
            mainContent.style.display = 'block';
        }, 500);
    };
});
