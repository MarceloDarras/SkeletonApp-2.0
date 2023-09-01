import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { NavController, AnimationController, IonCard, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChildren(IonCard, { read: ElementRef }) cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;

  nombre: string="";
  contrasena: string="";
  
  private animation!: Animation;
  private animation2!: Animation;
  private animationExito!:Animation;
  private cardB!: Animation;
  private cardC!: Animation;

  constructor(private navCtrl: NavController, private animationCtrl: AnimationController, private alertController: AlertController) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const cardA = this.animationCtrl
      .create()
      .addElement(this.cardElements.first.nativeElement)
      .duration(1500)
      .iterations(1)
      .direction('alternate')
      .fromTo('background', 'white', 'Green');
    const cardB = this.animationCtrl
      .create()
      .addElement(this.cardElements.last.nativeElement)
      .duration(1500)
      .iterations(1)
      .direction('alternate')
      .fromTo('background', 'white', 'Green');

    const cardC = this.animationCtrl
      .create()
      .addElement(this.cardElements.last.nativeElement)
      .duration(1500)
      .iterations(1)
      .direction('alternate')
      .fromTo('background', 'white', 'Red');

      this.animation = this.animationCtrl
      .create()
      .duration(500)
      .iterations(1)
      .addAnimation([cardA]);

      this.animation2 = this.animationCtrl
      .create()
      .duration(500)
      .iterations(2)
      .addAnimation([cardB]);

      this.animationExito = this.animationCtrl
      .create()
      .duration(500)
      .iterations(2)
      .addAnimation([cardC]);

  }

  play() {
    if(this.nombre != ""){
      this.animation.play();
    }
  
  }

  play2() {
    if(this.contrasena.length == 4  ){
      this.animation2.play();
    }else{
      this.animationExito.play();
    }
  }

  


  

  async login(){
    
    if(this.nombre != "" && this.contrasena != ""){
      this.navCtrl.navigateForward('/home2', {
        queryParams:{
           username: this.nombre
        }
      });
      
      const alert = await this.alertController.create({
        header: 'Inicio Exitoso',
        message: 'Bienvenido ' + this.nombre,
        buttons: ['OK']
      })
      await alert.present();
    }else if(this.contrasena.length<4 ){
      
    }else{
      
    }
  }

  ionViewWillLeave(){

  }


}
