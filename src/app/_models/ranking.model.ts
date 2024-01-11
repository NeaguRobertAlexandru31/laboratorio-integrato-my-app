export default interface Ranking {
  teamdId: number;
  teamLogo: string;
  teamName: string;
  lose: number;
  win: number;
  winPercentage: number;
  diffPoints?: number;
  colour: string;
}
