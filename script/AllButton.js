function AllButtonShow() {
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories));
}

const displayCategories = categories => {
  const ButtonContainer = document.getElementById('AllButtonContainer');

  categories.forEach(item => {
    const Button = document.createElement('button');
    Button.classList.add('btn');
    Button.innerText = item.category;

    ButtonContainer.appendChild(Button);
  });
};

AllButtonShow();
