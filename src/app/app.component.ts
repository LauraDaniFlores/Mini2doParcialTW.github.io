import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpcLugaresComponent } from './opc-lugares/opc-lugares.component';
import { ReservacionComponent } from './reservacion/reservacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OpcLugaresComponent, ReservacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servicios2';
}
