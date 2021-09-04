class Player {
    constructor({ id,name,position, dateOfBirth, countryOfBirth, nationality, role, team}) {
        this.id = id
        this.name = name
        this.position = position
        this.dateOfBirth = dateOfBirth
        this.countryOfBirth = countryOfBirth
        this.nationality = nationality
        this.role = role
        this.team = team
    }

    render() {
        const playerContainer =  document.querySelector(`#competition-${this.team.competitionId} .teams-container #team-${this.team.id} .players-container`)
        const player = document.createElement("li")
        player.id = `player-${this.id}`
        player.innerHTML = `
            <span class="player" data-id="${this.id}"> name: ${this.name} | position: ${this.position} | DOB: ${this.dateOfBirth} | Birth Nation: ${this.countryOfBirth} | Nationality: ${this.nationality} | Role: ${this.role} </span>
         
        `
       playerContainer.appendChild(player)


    }
}