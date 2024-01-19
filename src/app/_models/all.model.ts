export default interface AllTeams{
        idTeam: number,
        league: {
            idLeague: number,
            nameLeague: string
        },
        nameTeam: string,
        nickname: string,
        codeTeam: string,
        colour: string,
        city: string,
        logo: string,
        allStar: number | null,
        nbaFranchise: string | null
    }

    export default interface AllPlayers{
        idPlayer: number,
        firstname: string,
        lastname: string,
        img: null
    }
