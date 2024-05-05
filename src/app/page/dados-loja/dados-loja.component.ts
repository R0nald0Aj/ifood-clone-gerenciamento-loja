import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Observable, Observer } from 'rxjs';
import { CepService } from 'src/app/service/cep/cep.service';
import { ReaderFileService } from 'src/app/service/reader_file_service/reader-file.service';
import { Address } from '../../model/address';


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
  srs = "";
  zipCodeValue = "";
  
  constructor(private readerFileService:ReaderFileService,private cepService:CepService){
      
  }

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
      zipCode : new FormControl("",[Validators.required,Validators.maxLength(8),Validators.minLength(8)]),
      category : new FormControl("a",[Validators.required]),
      address : new FormControl("dasdsadsadsada",[Validators.required])
    })
    
  }

  findAddress(cchosedZipCode :string){
    console.log(cchosedZipCode);
    if(cchosedZipCode.length ===  8){
      this.cepService.findAdderss(cchosedZipCode).subscribe(({
       next: (data) =>{
          console.log( data.bairro)
           if(data.bairro === undefined ){
            this.formLoja.get('zipCode')?.setErrors(Validators.pattern("cep invalido"))
            console.log(`erro ao buscar cep erro ${data}`)
           }else{
             this.formLoja.patchValue({'city': data.uf})
             this.formLoja.patchValue({'address': `${data.bairro ??''},${data.logradouro ?? ''} ,${data.complemento ??''},${data.localidade??''}-${data.uf ??''}`})
           }

       },
       error:( err) =>{
        console.log(err)
       }
    }));
    }
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

