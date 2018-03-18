import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: 'Window',  useValue: window }
  ]
})
export class AppComponent {

  @ViewChild('mypdf') el:ElementRef;

  constructor(
    @Inject('Window') private window: Window,
  ) { }

  download() {

    let pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'in',
      format: [100, 150]
    });
 
    let options = {
        pagesplit: true
        margin: false,
    };

    pdf.setDisplayMode({zoom : '5' })

    pdf.addHTML(this.el.nativeElement, 0, 0, options, () => {
        pdf.save("test.pdf");
    });
  }
}
