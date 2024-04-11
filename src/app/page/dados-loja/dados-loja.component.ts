import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Observable, Observer } from 'rxjs';
import { ReaderFileService } from 'src/app/service/reader-file.service';


@Component({
  selector: 'app-dados-loja',
  templateUrl: './dados-loja.component.html',
  styleUrls: ['./dados-loja.component.css']
})
export class DadosLojaComponent  implements OnInit{

  faCoffee = faCoffee;
  faCirclePlus  = faCirclePlus;
  formLoja! : FormGroup
  imgPerfil : string ="../../../assets/ifood.jpg"
  imgCapaBnner : string ="../../../assets/ifood.jpg"
  srs = ""
  
  
  constructor(private readerFileService:ReaderFileService){}
  ngOnInit(): void {
    this.formLoja = new FormGroup({
      imageCapa : new FormControl("",[Validators.required]),
      imagePerfilCirle : new FormControl("",[Validators.required]),
      nameLoja : new FormControl("Mc",[Validators.required]),
      descriptionLoja : new FormControl("vendas",[Validators.required]),
      cnpj : new FormControl("13232",[Validators.required]),
      phone :new FormControl("321321321",[Validators.required]),
      speciality : new FormControl("1",[Validators.required]),
      city : new FormControl("sp",[Validators.required]),
      category : new FormControl("a",[Validators.required]),
      zipCode:new FormControl("132323",[Validators.required]),
      address : new FormControl("dasdsadsadsada",[Validators.required])
    })
  }
 
  onImageCapBannerAttached(event: any){
    const file  : File = event.target.files[0];
    this.readerFileService.readeImage(file).subscribe((data => {
     this.imgCapaBnner= data
      this.formLoja.patchValue({'imageCapa' : file})
   }))
  }
  onImagePefilAttached(event: any) {
      const file  : File = event.target.files[0];
         this.readerFileService.readeImage(file).subscribe((data => {
          this.imgPerfil= data
          this.formLoja.patchValue({'imagePerfilCirle' : file})
        }))
    }

    cadastrar() {
       if (this.formLoja.valid) {
           console.log(this.formLoja.value)
       }
    }
  
 

  get imageCapa(){
    return this.formLoja.get('imageCapa')
  }
  get imagePerfilCirle(){
    return this.formLoja.get('imagePerfilCirle')
  }

  get nameLoja(){
    return this.formLoja.get('nameLoja')
  }
  get descriptionLoja(){
    return this.formLoja.get('descriptionLoja')
  }
  get cnpj(){
    return this.formLoja.get('cnpj')
  }
  get phone(){
    return this.formLoja.get('phone')
  }
  get speciality(){
    return this.formLoja.get('speciality')
  }
  get city(){
    return this.formLoja.get('city')
  }
   get category(){
    return this.formLoja.get('category')
  }
   get zipCode(){
    return this.formLoja.get('zipCode')
  }
  
  get address(){
    return this.formLoja.get('address')
  }
}

