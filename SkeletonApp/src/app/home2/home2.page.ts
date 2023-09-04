import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AlertController, AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {
  @ViewChildren(IonCard, { read: ElementRef }) cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;
  campoSeleccionado: string="";
  texto1:string="";
  texto2: string="";

  campoSeleccOriginal:string = "";
  texto1Original: string="";
  texto2Original: string="";

  

  nombreCampo: string = 'Nivel Educacional';
  nombre: string="";


  private animation!: Animation;
  private animationB!: Animation;

  constructor(private route: ActivatedRoute, private alertController: AlertController, private animationCtrl: AnimationController) {
    this.route.queryParams.subscribe(params => {
      this.nombre = params['username'];
    }) 
    this.texto2Original = this.texto2;
    this.campoSeleccOriginal = this.campoSeleccionado;
    this.texto1Original = this.texto1;

  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.cardElements.first.nativeElement)
      .duration(2500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
    this.animationB = this.animationCtrl
      .create()
      .addElement(this.cardElements.last.nativeElement)
      .duration(2500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');

   
  }

  play(){
    this.animation.play();
  }

  play2(){
    this.animationB.play();
  }

  limpiar(){
    this.play();
    this.play2();
    this.campoSeleccionado = '';
    this.texto1= '';
    this.texto2= '';
  }

  async mostrar(){
    if(this.campoSeleccionado == '3'){
      this.campoSeleccionado = 'Superior'
    }else if(this.campoSeleccionado == '2'){
      this.campoSeleccionado = 'Media'
    }else if(this.campoSeleccionado == '1'){
      this.campoSeleccionado = 'Basico'
    }

    if(this.texto1 == "" || this.texto2 == "" || this.campoSeleccionado == ""){
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Alguno de los campos está vacío',
        buttons: ['OK']
      })
      await alert.present();
    }else{
      const alert = await this.alertController.create({
        header: 'Datos usuario',
        message: this.texto1 + ' ' + this.texto2,
        buttons: ['OK']
      })
      await alert.present();
    }
  
  }

  ngOnInit() {
  }

}
