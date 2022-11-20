import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseErrorService {

  constructor() { }

  firebaseError(code: string) {
    switch (code) {
      case 'auth/email-already-exists':
        return 'Otro usuario ya está utilizando el correo electrónico.';
      case 'auth/id-token-expired':
        return 'El token de ID está vencido.';
      case 'auth/internal-error':
        return 'El servidor encontró un error inesperado procesar la solicitud.';
      case 'auth/invalid-argument':
        return 'Se proporcionó un argumento no válido.';
      case 'auth/invalid-email':
        return 'El valor de email no es válido.';
      case 'auth/invalid-email-verified':
        return 'El valor que se proporcionó no es válido.';
      case 'auth/invalid-password':
        return 'El valor del password no es válido.';
      case 'auth/invalid-phone-number':
        return 'El valor phoneNumber no es válido.';
      case 'auth/phone-number-already-exists':
        return 'Otro usuario ya utiliza el phoneNumber proporcionado.';
      case 'auth/email-already-in-use':
        return 'usuario ya existe.';
      case 'auth/weak-password':
        return 'usuario ya existe.';
      default:
        return 'error desconocido.';
    }
  }

}
