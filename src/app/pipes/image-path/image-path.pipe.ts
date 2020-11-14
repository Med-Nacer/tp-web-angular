import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePath'
})
export class ImagePathPipe implements PipeTransform {

  transform(imagePath: string, ...args: unknown[]): string {
    if(imagePath.length>0) return imagePath
    return 'user.png';
  
  }

}
