class Competition {
    constructor({ id,name }) {
        this.id = id
        this.name = name
    }

    render() {
        const competitionContainer = document.getElementById("competitions")
        const competition = document.createElement("li")
        competition.id = `competition-${this.id}`
        competition.innerHTML = `
            <span class="competition-name" data-id="${this.id}">${this.name}</span>
            <ul class="teams-container"></ul>
        `
        competitionContainer.appendChild(competition)
        competition.querySelector(".competition-name").addEventListener("click", Api.fetchTeams)
    }
}