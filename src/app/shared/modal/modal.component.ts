import { Component, inject, TemplateRef} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})

export class NgbdModalOptions {
  private modalService = inject(NgbModal);

	openModalInfo(modalInfo: TemplateRef<any>) {
		this.modalService.open(modalInfo, { centered: true });
	}
}
