import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrada-informacion',
  templateUrl: './entrada-informacion.component.html',
  styleUrls: ['./entrada-informacion.component.css']
})
export class EntradaInformacionComponent implements OnInit {

  //variables
  form: FormGroup;
  botonActive: boolean = false;
  valorInput: string = '';
  favoriteSeason?: string;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(11), Validators.pattern('^[0-9]*$')]]
    });
  }

  ngOnInit() {
    this.activarBoton(false);
  }

  formatNumber() {
    let numero = this.form.get('numeroDocumento')?.value.replace(/\D/g, '');
    numero = numero.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    this.form.get('numeroDocumento')?.setValue(numero, { emitEvent: false });
  }

  onSubmit() {
    if (this.form.valid) {
      const data = this.form.value;
      sessionStorage.setItem('clienteData', JSON.stringify(data));
      //this.router.navigate(['/resumen']);
    }
  }

  private activarBoton(value: boolean) {
    this.botonActive = value;
  }

  //metodo Botón Activo y Inactivo
  onChangeInput() {
    // Lógica para determinar si el botón debe estar activo o inactivo
    this.botonActive = this.valorInput.trim().length > 0; // Activo si hay texto en el input
  }


}

