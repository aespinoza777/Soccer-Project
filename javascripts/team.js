class Team {
    constructor({ id,name,clubColors, venue, competitionId}) {
        this.id = id
        this.name = name
        this.clubColors = clubColors
        this.venue = venue
        this.competitionId = competitionId
        Team.all.push(this)
    }

    static all = []

    static findByID(id) {
        return Team.all.find(team => team.id === parseInt(id))
    }

    render() {
        const teamContainer =  document.querySelector(`#competition-${this.competitionId} .teams-container`)
        const team = document.createElement("li")
        team.id = `team-${this.id}`
        team.innerHTML = `
            <span class="team" data-id="${this.id}">${this.name}, colors: ${this.clubColors}, venue: ${this.venue}</span>
            <ul class="players-container"></ul>
        `
       teamContainer.appendChild(team)
       team.querySelector(".team").addEventListener("click", Api.fetchPlayers)
    }

}