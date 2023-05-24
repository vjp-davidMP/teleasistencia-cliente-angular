import { Injectable } from '@angular/core';
import {CargaUserService} from "./carga-user.service";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {IAgenda} from "../interfaces/i-agenda";
import {Observable, of} from "rxjs";
import {CargarAgendasResueltasService} from "./cargar-agendas-resueltas.service";
import {CargaSeguimientoTeleoperadorService} from "./carga-seguimiento-teleoperador.service";
import {catchError} from "rxjs/operators";
import {IAlarma} from "../interfaces/i-alarma";

@Injectable({
  providedIn: 'root'
})
export class ListaAlarmasResueltasResolveService implements Resolve<IAlarma>{

  constructor(private cargarAlarmas: CargaSeguimientoTeleoperadorService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAlarma> {

    return this.cargarAlarmas.getAlarmasResueltas(route.params['id']).pipe(

      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }
}
