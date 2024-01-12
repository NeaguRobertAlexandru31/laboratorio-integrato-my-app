export default interface Ranking {
  teamId: number;
  teamLogo: string;
  teamName: string;
  lose: number;
  win: number;
  winPercentage: number;
  diffPoints?: number;
  colour: string;
}
