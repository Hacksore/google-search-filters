export const addSiteFilter = (domain: string) => {
  const searchElement: any = document.querySelectorAll('[name="q"]')[0];
  const currentValue = searchElement.value;

  const siteFilter = `site:${domain}`;
  // chheck if site is added already
  if (!currentValue.includes("site:")) {
    searchElement.value = `${currentValue} ${siteFilter}`;
  } else {
    // todo update
    searchElement.value = currentValue.replace(/site:(.*)/, `site:${domain}`);
  }
};

export const submitGoogleSearch = (domain: string) => {
  const searchForm: any = document.getElementById("tsf");

  if (searchForm) {
    searchForm.submit();
  }
};
