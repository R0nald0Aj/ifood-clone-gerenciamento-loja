import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReaderFileService {

  constructor() { }

  readeImage(file : File):Observable<string>{

    const fileReader =  new FileReader()
    
    return  new Observable((observer : Observer<string>)=>{
     fileReader.readAsDataURL(file)
     
      fileReader.onload = (ev)=> { 
      observer.next(ev.target?.result as string);
      observer.complete()
     }

     fileReader.onerror = () =>{
        observer.error(()=>{"erro ao buscasr imagem"});
     }
    })
   }

   
}
