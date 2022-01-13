export function renderParticipant(participant) {
    const name = document.createElement('h4');
    name.textContent = participant.name;
    name.classList.add('participant');
    return name;
}
