import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  // Requet (get) vers le serveur pour avoir tous les paramètres
  getAllTaches(): Observable<any>{
    return this.http.get(this.baseurl + '/taches/', {headers: this.httpHeaders});
  }

  // Requet (get) vers le serveur pour avoir des paramètres spécifiques
  getOneTache(id): Observable<any>{
    return this.http.get(this.baseurl + '/taches/' + id + '/', {headers: this.httpHeaders});
  }

  // Envoie (put) vers le serveur pour changer les données
  updateTache(tache): Observable<any>{
    const body = {titre: tache.titre, desc: tache.desc, debut: tache.debut, duree: tache.duree};
    return this.http.put(this.baseurl + '/taches/' + tache.id + '/', body, {headers: this.httpHeaders});
  }

  // Envoie (post) vers le serveur pour ajouter les données
  createTache(tache): Observable<any>{
    const body = {titre: tache.titre, desc: tache.desc, debut: tache.debut, duree: tache.duree};
    return this.http.post(this.baseurl + '/taches/', body, {headers: this.httpHeaders});
  }

  // Envoie (post) vers le serveur pour ajouter les données
  deleteTache(id): Observable<any>{
    return this.http.delete(this.baseurl + '/taches/' + id + '/', {headers: this.httpHeaders});
  }

  // Lance le script d'importation côté serveur
  lancer_importation_fichier_excel(): Observable<any>{
    return this.http.get(this.baseurl + '/importation_fichier_excel/', {headers: this.httpHeaders});
  }

  // Lance le script d'exportation côté serveur
  lancer_exportation_fichier_excel(): Observable<any>{
    return this.http.get(this.baseurl + '/exportation_fichier_excel/', {headers: this.httpHeaders});
  }
}
