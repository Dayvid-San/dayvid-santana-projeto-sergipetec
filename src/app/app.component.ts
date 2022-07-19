import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  preserveWhitespaces: true
})
export class AppComponent {
  title = 'dayvid-santana-projeto-sergipetec';




  addClass = (vari: any, classtgl: any, changed: any, act = 'click') => {
      vari.addEventListener(act, () => {
          changed.classList.toggle(`${classtgl}`)
  })
  }

  ligaDesliga = (vari: any, changed: any) => {
      this.addClass(vari, "desabilidado", changed)
  }


}
