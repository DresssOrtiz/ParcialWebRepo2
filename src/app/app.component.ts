import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Torneo } from './torneo.model';
import { TorneoService } from './torneo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  torneos: Torneo[] = [];
  mensaje = '';
  apiConectada = false;

  torneo: Torneo = {
    nombre: '',
    deporte: '',
    fechaInicio: '',
    ciudad: ''
  };

  constructor(private readonly torneoService: TorneoService) {}

  ngOnInit(): void {
    this.listarTorneos();
  }

  listarTorneos(): void {
    this.torneoService.listar().subscribe({
      next: (torneos) => {
        this.torneos = torneos;
        this.apiConectada = true;
      },
      error: () => {
        this.apiConectada = false;
        this.mensaje = 'No se pudieron consultar los torneos';
      }
    });
  }

  crearTorneo(): void {
    this.torneoService.crear(this.torneo).subscribe({
      next: () => {
        this.torneo = { nombre: '', deporte: '', fechaInicio: '', ciudad: '' };
        this.mensaje = 'Torneo registrado correctamente';
        this.listarTorneos();
      },
      error: () => {
        this.mensaje = 'No se pudo guardar el torneo';
      }
    });
  }
}
