document.addEventListener('DOMContentLoaded', function () {
  const resetFlexboxBtn = document.getElementById('reset-flexbox');
  const gapInput = document.getElementById('gap');
  const flexDirectionRowBtn = document.getElementById('flex-direction-row');
  const flexDirectionColumnBtn = document.getElementById('flex-direction-column');
  const justifyContentBtns = document.querySelectorAll('[id^="justify-"]');
  const alignItemsBtns = document.querySelectorAll('[id^="align-"]');
  const flexGrowResetBtn = document.getElementById('flex-grow-reset');
  const flexGrowAllBtn = document.getElementById('flex-grow-all');
  const flexGrowInputs = [
    document.getElementById('flex-grow-1'),
    document.getElementById('flex-grow-2'),
    document.getElementById('flex-grow-3')
  ];
  const boxes = document.querySelectorAll('.box');
  const displayPanel = document.querySelector('.display-panel');


  function resetFlexbox() {
    displayPanel.style.gap = '0px';
    displayPanel.style.flexDirection = 'row';
    displayPanel.style.justifyContent = 'flex-start';
    displayPanel.style.alignItems = 'stretch';


    gapInput.value = 0;
    flexGrowInputs.forEach(input => input.value = 0);
    boxes.forEach(box => box.style.flexGrow = 0);
  }

  resetFlexboxBtn.addEventListener('click', resetFlexbox);

  gapInput.addEventListener('input', function () {
    displayPanel.style.gap = `${gapInput.value}px`;
  });


  flexDirectionRowBtn.addEventListener('click', function () {
    displayPanel.style.flexDirection = 'row';
  });

  flexDirectionColumnBtn.addEventListener('click', function () {
    displayPanel.style.flexDirection = 'column';
  });


  justifyContentBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      displayPanel.style.justifyContent = btn.textContent.replace(/\s+/g, '-').toLowerCase();
    });
  });


  alignItemsBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      displayPanel.style.alignItems = btn.textContent.replace(/\s+/g, '-').toLowerCase();
    });
  });


  flexGrowResetBtn.addEventListener('click', function () {
    flexGrowInputs.forEach(input => input.value = 0);
    boxes.forEach(box => box.style.flexGrow = 0);
  });


  flexGrowAllBtn.addEventListener('click', function () {
    flexGrowInputs.forEach(input => input.value = 1);
    boxes.forEach((box, index) => box.style.flexGrow = flexGrowInputs[index].value);
  });


  flexGrowInputs.forEach((input, index) => {
    input.addEventListener('input', function () {
      boxes[index].style.flexGrow = input.value;
    });
  });

  resetFlexbox();


  flexGrowInputs.forEach((input, index) => {
    input.addEventListener('input', function () {
      const value = parseInt(input.value);
      if (!isNaN(value)) {
        boxes[index].style.flexGrow = value;
      }
    });
  });


  flexDirectionRowBtn.addEventListener('click', function () {
    displayPanel.style.flexDirection = 'row';
  });


  flexDirectionColumnBtn.addEventListener('click', function () {
    displayPanel.style.flexDirection = 'column';
  });


  justifyContentBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const justifyContentValue = btn.textContent.replace(/\s+/g, '-').toLowerCase();
      displayPanel.style.justifyContent = justifyContentValue;
    });
  });


  alignItemsBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const alignItemsValue = btn.textContent.replace(/\s+/g, '-').toLowerCase();
      displayPanel.style.alignItems = alignItemsValue;
    });
  });


  resetFlexboxBtn.addEventListener('click', function () {
    resetFlexbox();
  });


  gapInput.addEventListener('input', function () {
    displayPanel.style.gap = `${gapInput.value}px`;
  });


  flexGrowResetBtn.addEventListener('click', function () {
    flexGrowInputs.forEach((input, index) => {
      input.value = 0;
      boxes[index].style.flexGrow = 0;
    });
  });
  
  flexGrowAllBtn.addEventListener('click', function () {
    flexGrowInputs.forEach((input, index) => {
      input.value = 1;
      boxes[index].style.flexGrow = 1;
    });
  });
});
