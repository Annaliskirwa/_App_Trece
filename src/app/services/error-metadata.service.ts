import { Injectable , ErrorHandler} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMetadataService  implements ErrorHandler{
  public handleError(error: any): void {
      console.error("This is the error meta data service")
  }

}
