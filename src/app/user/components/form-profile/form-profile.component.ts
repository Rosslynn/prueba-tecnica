import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.css']
})
export class FormProfileComponent implements OnInit {

  file!: File;
  photoSelected!: string | ArrayBuffer | null;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Función que recibe el archivo de imagen y lo transforma para previsualizarlo en el front-end
   * @param photo - Archivo tipo file
   */
  onPhotoSelected(photo: any) {
    if (photo.target.files && photo.target.files[0]) {
      const { type } = photo.target.files[0]
      const imageType = type.split('/')[1];
      const fileTypes = /jpg|png|jpeg/;
      const result = fileTypes.test(imageType);
      
      if (!result) {
        Swal.fire('Ha ocurrido un problema', 'Los tipos de imagen permitidos son JPG, PNG, JPEG.', 'error');
        return;
      }
      // Previsualización de la imagen
      this.file = photo.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);

    };
  }

}
