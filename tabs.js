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