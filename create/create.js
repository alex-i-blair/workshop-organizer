import { checkAuth, logout, createParticipant, getWorkshops } from '../fetch-utils.js';

checkAuth();
const toWorkshopsButton = document.getElementById('nav-to-workshops');
const logoutButton = document.getElementById('logout');
const form = document.querySelector('.participant-form');

form.addEventListener('submit', async(e)=> {
    e.preventDefault();
    
    const data = new FormData(form);

    const name = data.get('name');
    const workshop_id = data.get('workshop_id');

    await createParticipant({
        name,
        workshop_id,
    });

    window.location.href = '../workshops';
});

window.addEventListener('load', async() => {
    const dropdown = document.querySelector('select');
    const workshops = await getWorkshops();

    for (let workshop of workshops) {
        const dropdownOption = document.createElement('option');
        dropdownOption.value = workshop.id;
        dropdownOption.textContent = workshop.name;
        dropdown.append(dropdownOption);
    }
});

toWorkshopsButton.addEventListener('click', () => {
    return window.location.href = '../workshops';
});

logoutButton.addEventListener('click', () => {
    logout();
});



