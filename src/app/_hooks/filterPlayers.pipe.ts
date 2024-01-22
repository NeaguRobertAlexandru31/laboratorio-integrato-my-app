import { Pipe, PipeTransform } from '@angular/core';
import AllPlayers from '../_models/all.model';
@Pipe({
  name: 'filterPlayer'
})
export class FilterPipePlayers implements PipeTransform {
  transform(items: AllPlayers[], searchText: string): AllPlayers[] {
    if(!items) return [];
    if(!searchText) return items;
      searchText = searchText.toLowerCase();
      return items.filter( it => {
      return it.firstname.toLowerCase().includes(searchText) || it.lastname.toLowerCase().includes(searchText);
    });
   }
}