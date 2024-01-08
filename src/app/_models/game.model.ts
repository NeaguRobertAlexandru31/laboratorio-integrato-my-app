export default interface Game {      
    id_game: number,
    home: number,
    visitors: number,
    start: string, //Chiedere se il valore e string o date
    end: null,
    duration: null,
    currentPeriod: number,
    totalPeriod: number,
    status: number,
    arena: number,
    season: number,
    official: [string]
}