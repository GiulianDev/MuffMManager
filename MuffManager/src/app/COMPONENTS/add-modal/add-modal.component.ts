import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]

})
export class AddModalComponent  implements OnInit {

  formData = {
    nome: '',
    // Aggiungi altre proprietà per i campi del form
  };

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  submitForm() {
    // Esegui qui la logica di gestione del form
    console.log(this.formData);

    // Chiudi la modale dopo l'invio del form
    this.dismissModal();
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
