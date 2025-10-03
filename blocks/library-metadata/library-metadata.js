export default async function decorate(block) {
  [...block.children].forEach((child, index) => {
    const directDivs = [...child.children].filter((el) => el.tagName === 'DIV');
    if (directDivs.length >= 2) {
      directDivs[0].style.display = 'none';
      if (index === 0) {
        const secondDiv = directDivs[1];
        const h2 = document.createElement('h2');
        h2.innerHTML = secondDiv.innerHTML;
        child.replaceChild(h2, secondDiv);
      }
    }
  });
}
