import { Component, OnInit  } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent implements OnInit {
  taches = [{titre: 'null'}];
  tacheSelectionnee;
  reponse_export_excel = "";
  ne_pas_afficher_reponse_export_excel = true;
  reponse_import_excel = "";
  ne_pas_afficher_reponse_import_excel = true;

  constructor(private api:ApiService) {
    this.getTaches();
    this.tacheSelectionnee = {id:-1, titre:'', desc:'', debut:'', duree:0};
  }

  ngOnInit(): void {
  }

  getTaches = () => {
    this.api.getAllTaches().subscribe( //inscription à l'observable getAllTaches()
      data => {
        this.taches = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  //Clic sur un element de la liste
  tacheClicked = (tache) => {
    this.api.getOneTache(tache.id).subscribe( //inscription à l'observable getOneTache()
      data => {
        this.tacheSelectionnee = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  //Appuie du bouton de mise à jour
  updateTache = () => {
    this.api.updateTache(this.tacheSelectionnee).subscribe( //inscription à l'observable updateTache()
      data => {
        this.getTaches();
      },
      error => {
        console.log(error);
      }
    );
  }

  //Appuie du bouton pour ajouter un élement
  createTache = () => {
    this.api.createTache(this.tacheSelectionnee).subscribe(
      data => {
        this.taches.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  //Appuie du bouton pour supprimer un élement
  deleteTache = () => {
    this.api.deleteTache(this.tacheSelectionnee.id).subscribe(
      data => {
        this.getTaches();
      },
      error => {
        console.log(error);
      }
    );
  }

  //Bouton pour lancer l'exportation base données >> xlsx
  exporterExcel = () => {
    this.api.lancer_exportation_fichier_excel().subscribe(
      data => {
        this.reponse_export_excel = data;
        this.ne_pas_afficher_reponse_export_excel = false;
      },
      error => {
        console.log(error);
      }
    );
  }

  //Bouton pour lancer l'importation xlsx >> base données
  importerExcel = () => {
    this.api.lancer_importation_fichier_excel().subscribe(
      data => {
        this.reponse_import_excel = data;
        this.ne_pas_afficher_reponse_import_excel = false;
        this.getTaches();
      },
      error => {
        console.log(error);
      }
    );
  }

}

