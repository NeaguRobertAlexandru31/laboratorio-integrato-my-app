export default interface All{
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