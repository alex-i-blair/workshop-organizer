import { checkAuth, deleteParticipant, getWorkshops, logout } from '../fetch-utils.js';

checkAuth();

const toCreateButton = document.getElementById('nav-to-create');
const logoutButton = document.getElementById('logout');
const displayWorkshops = document.querySelector('.display-workshops');


window.addEventListener('load', async() => {

    fetchAndDisplayWorkshops();
    

});

toCreateButton.addEventListener('click', ()=> {
    return window.location.href = '../create';
});

logoutButton.addEventListener('click', () => {
    logout();
});

export async function fetchAndDisplayWorkshops() {
    const workshops = await getWorkshops();
    displayWorkshops.textContent = '';

    for (let workshop of workshops) {
        const workshopCard = document.createElement('div');
        const workshopName = document.createElement('h2');
        const participantsEl = document.createElement('div');

        workshopCard.classList.add('workshop');
        workshopName.textContent = workshop.name;
        workshopCard.append(workshopName, participantsEl);

        for (let participant of workshop.participants) {
            const participantEl = renderParticipant(participant);
            participantEl.addEventListener('click', async() => {
                await deleteParticipant(participant.id);
                fetchAndDisplayWorkshops();
            });
            participantEl.textContent = participant.name;
            participantsEl.append(participantEl);
        }
        displayWorkshops.append(workshopCard);
    }
}

export function renderParticipant(participant) {
    const name = document.createElement('h3');
    name.textContent = participant.name;
    name.classList.add('participant');
    return name;
}
