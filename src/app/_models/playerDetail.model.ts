export default interface PlayerStat{
    totalPoints: number,// V
    gamePlayed?: number,// V
    totalRebounds: number,// V
    totalAssists: number,// V
    totalMinutes: number,// V
    totalBlocks: number,// V
    totalSteals: number,// V
    minutsGame?: number, // V
    freeThrowPercentage: number,// V Gia convertiti in percent
    threePointPercentage: number, // V Gia convertiti in percent
    fieldGoalsMade: number// V Gia convertiti in percent
}