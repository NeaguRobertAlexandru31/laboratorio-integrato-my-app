export default interface Team {
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

export default interface TeamStats {
        id: {
            idTeam:  number,
            idSeason: number
        },
        team: {
            idTeam:  number,
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
            allStar: null,
            nbaFranchise: null
        },
        season: {
            idSeason: number,
            season: number
        },
        gamesPlayed:  number,
        fastBreakPoints: number,
        pointsInPaint: number,
        biggestLead: number,
        secondChancePoints: number,
        pointsOffTurnovers: number,
        longestRun: number,
        points: number,
        fieldGoalsMade: number,
        fieldGoalsAttempted: number,
        fieldGoalPercentage: number,
        freeThrowsMade: number,
        freeThrowsAttempted: number,
        freeThrowPercentage: number,
        threePointersMade: number,
        threePointersAttempted: number,
        threePointPercentage:  number,
        offensiveRebounds: number,
        defensiveRebounds: number,
        totalRebounds: number,
        assist: number,
        personalFouls: number,
        steals: number,
        turnovers: number,
        blocks: number,
        plusMinus: number
}