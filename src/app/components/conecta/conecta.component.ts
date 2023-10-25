import { Component } from '@angular/core';
import { ServerService } from '../../server.service';
import { valores, valoresPost } from './Model/respostaModel';

@Component({
  selector: 'app-conecta',
  templateUrl: './conecta.component.html',
  styleUrls: ['./conecta.component.css']
})
export class ConectaComponent {
  constructor(public servico: ServerService) {
  }
  val: valores[] = [];
  client: valoresPost = {} as valoresPost;
  clientResult: valoresPost = {} as valoresPost;
  vItemNome: string = "";
  vItemJob: string = "";
  alertContent: string = "";

  chamadaBack() {
    this.val = [];
    this.clientResult = {} as valoresPost;
    this.servico.getTodosUsuarios().subscribe(
      (resposta: any) => {
        console.log(resposta.data);
        this.val = (resposta.data);
        console.log(this.val);
        this.alertContent = this.getFormattedAlertContent(); // Define o conteúdo do alert
        this.backAlert(); // Chama o alert aqui após definir o conteúdo
      }
    )
  }

  chamadaBackPost() {
    this.val = [];
    this.clientResult = {} as valoresPost;
    this.client = { name: this.vItemNome, job: this.vItemJob };
    this.servico.postUsuario(this.client).subscribe(
      (resp: any) => {
        this.clientResult = (resp);
        console.log(this.clientResult);
        this.alertContent = this.getFormattedAlertContent(); // Define o conteúdo do alert
        this.backAlert(); // Chama o alert aqui após definir o conteúdo
      }
    )
  }

  backAlert() {
    window.alert(this.alertContent);
  }

  getFormattedAlertContent(): string {
    // Esta função formata o conteúdo do alert como desejar
    return this.val.map(result => `${result.id} - ${result.first_name} ${result.last_name}`).join('\n');
  }

}
