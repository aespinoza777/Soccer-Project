class Api {
    static fetchCompetitions() {
        fetch("http://api.football-data.org/v2/competitions", {
            "method": "GET",
            "mode": "cors", 
            "cache": "no-cache",
            "headers": {
                "x-auth-token": "d4b0dd1aed3b4edcbf7a75d9b73871af",
                "accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(json => {
           json.competitions.forEach(competitionJson => {
               if (["WC", "CL", "BL1", "DED", "BSA", "PD", "FL1", "ELC", "PPL", "EC", "SA", "PL", "CLI" ].includes(competitionJson.code)) {
                    const competition = new Competition(competitionJson)
                    competition.render()
               }
           });
        }) 
    }

    static fetchTeams(event) {
        
        const id = event.target.dataset.id
        fetch(`http://api.football-data.org/v2/competitions/${id}/teams`, {
            "method": "GET",
            "mode": "cors", 
            "cache": "no-cache",
            "headers": {
                "x-auth-token": "d4b0dd1aed3b4edcbf7a75d9b73871af",
                "accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(json => {
           json.teams.forEach(teamJson => {
               teamJson.competitionId = json.competition.id
               const team = new Team(teamJson)
                 team.render()
           });
        }) 

    }


    static fetchPlayers(event) {
        const id = event.target.dataset.id
        fetch(`http://api.football-data.org/v2/teams/${id}`, {
            "method": "GET",
            "mode": "cors", 
            "cache": "no-cache",
            "headers": {
                "x-auth-token": "d4b0dd1aed3b4edcbf7a75d9b73871af",
                "accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(json => {
           json.squad.forEach(playerJson => {
               playerJson.team = Team.findByID(json.id)
               const player = new Player(playerJson)
                player.render()
           });
        }) 

    }
}

