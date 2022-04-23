Чтобы табы работали нужно привязать в верстке контент к кнопке при помощи data-атрибута. Пример: 

For tabs to work, you need to bind content to the button in the layout using the data attribute. Example:

<button data-tab="#tab_1">tab 1</button>
<div class="tabs__item" id="tab_1">text content</div>





const tabs = (tabsBtnSelector,tabsItemSelector,activeClass) => {
  const tabsBtn = document.querySelectorAll(tabsBtnSelector),
    tabItems = document.querySelectorAll(tabsItemSelector);

  function onTabClick(btns) {
    btns.addEventListener('click', () => {
      let currentBtn = btns;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains(activeClass)) {
        tabsBtn.forEach(btns => {
          btns.classList.remove(activeClass);
        });

        tabItems.forEach(item => {
          item.classList.remove(activeClass);
        });

        currentBtn.classList.add(activeClass);
        currentTab.classList.add(activeClass);
      };
    });
  };

  tabsBtn.forEach(onTabClick);
  document.querySelector(tabsBtnSelector).click();
};
export default tabs;
