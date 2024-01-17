export default interface Team{
    allStar: number | null,
    city: string,
    codeTeam: string,
    colour: string,
    idTeam: number,
    league: {
        idLeague: number,
        nameLeague: string
    },
    logo: string,
    nameTeam: string,
    nbaFranchise: string | null,
    nickname: string
}