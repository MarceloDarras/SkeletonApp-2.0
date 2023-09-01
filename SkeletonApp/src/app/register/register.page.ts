import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nombre: string="";
  apellido: string="";
  correo: string="";
  contrasena: string="";
  confirContrasena: string="";

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  register(){
    if (this.nombre != "" && this.apellido != "" && this.correo != "" && this.confirContrasena== this.contrasena){
      this.navCtrl.navigateForward('/home2', {
        queryParams:{
          username: this.nombre
        }
      })
    }else if(this.nombre == "" && this.apellido == "" && this.correo == "" && this.confirContrasena== "" && this.contrasena ==""){
      alert("Alguno de los campos está vacío");
    }else if(this.confirContrasena != this.contrasena){
      alert("Las contraseñas ingresadas no coinciden");
    }
  }

}
