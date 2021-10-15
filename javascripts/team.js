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
            <ul class="players-container">
                <div class="add-player"> 
                    <button class="add-player-button">Add Player</button>
                    <form class="hidden"> 
                        <label for="id">ID</label>
                        <input type="number" name="id" class="id"/>
                        <label for="name">Name</label>
                        <input type="text" name="name" class="name"/>
                        <label for="position">Position</label>
                        <input type="text" name="position" class="position"/> 
                        <label for="dateOfBirth">DOB</label>
                        <input type="date" name="dateOfBirth" class="dateOfBirth"/>
                        <label for="countryOfBirth">Birth Nation</label>
                        <input type="text" name="countryOfBirth" class="countryOfBirth"/>
                        <label for="nationality">Nationality</label>
                        <input type="text" name="nationality" class="nationality"/>
                        <label for="role">Role</label>
                        <input type="text" name="role" class="role"/>
                        <input type="hidden" name="team-id" value="${this.id}" class="team-id"/>
                        <input type="submit" value="add player"/> 
                    </form>
                </div>

            </ul>
        `
       teamContainer.appendChild(team)
       team.querySelector(".team").addEventListener("click", Api.fetchPlayers)
       team.querySelector(".add-player-button").addEventListener("click", function(){
        team.querySelector("form").style.display = "block"
        
       })
       team.querySelector("form").addEventListener("submit", function(e) {
           e.preventDefault()
           const playerJson = {
               name: e.target.querySelector(".name").value, 
               id: e.target.querySelector(".id").value, 
               position: e.target.querySelector(".position").value, 
               dateOfBirth: e.target.querySelector(".dateOfBirth").value, 
               countryOfBirth: e.target.querySelector(".countryOfBirth").value, 
               nationality: e.target.querySelector(".nationality").value, 
               role: e.target.querySelector(".role").value, 
                team: Team.findByID(e.target.querySelector(".team-id").value)
                
           }

           const player = new Player(playerJson)
           player.render()
           e.target.reset()
       })
    }

}