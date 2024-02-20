/*
 Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
• Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
• Отобразите информацию о фотографе под изображением.
• Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.

* Дополнительные задачи (по желанию):

• Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался.
• Реализуйте возможность просмотра предыдущих "фото дня" с сохранением их в истории просмотров.
*/

const photoContainer = document.querySelector('.container');
const picture = document.querySelector('.picture');
const author = document.querySelector('.author');
const likeBtn = document.querySelector('.like');
const counter = document.querySelector('.counter');

async function getPhoto() {
    try {
        const responce = await fetch('https://api.unsplash.com/photos/random?client_id=ghHCHROgnxkuyWiXmH8_L2OGlmX3GjQQJ2npf6ui6a4');
        const photo = await responce.json();
        console.log(photo);
        return photo;
    } catch (error) {
        console.error('ошибка загрузки фотографий: ', error);
        return [];
    }

}


async function loadPhoto() {
    const photo = await getPhoto();
    if (photo) {
        console.log(photo);
        console.log(photo.user.name);
        picture.src = photo.urls.small;
        picture.alt = photo.alt_description;
        author.textContent = `Author: ${photo.user.name}`;
    }
};


loadPhoto();

likeBtn.addEventListener('click', () => {
    counter.textContent = Number(counter.textContent) + 1;
})