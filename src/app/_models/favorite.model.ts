export default interface FavoriteTeam{
    idTeam: number,
    nameTeam: string,
    nickname: string,
    colour: string,
    logo: string,
    league: string
}

export default interface FavoritePlayer{
    idPlayer: number,
    firstname: string,
    lastname: string,
    height: null,
    weight: null
}

export default interface FavoriteGame{      
    gameId: number,
    homeColour: string,
    homeTeamLogo: string,
    homeTeamName: string,
    p1home: number,
    p1visitor: number,
    p2home: number,
    p2visitor: number,
    p3home: number,
    p3visitor: number,
    p4home: number,
    p4visitor: number,
    p5home: number,
    p5visitor: number,
    risultato: string,
    start: string,
    visitorTeamLogo: string,
    visitorTeamName: string,
    visitorsColour: string,
    img: string
}
export default interface ListFavGames{      
    idGame: number;
}

export default interface ListFavTeams{      
    idTeam: number;
}

export default interface ListFavPlayers{      
    idPlayer: number;
}

