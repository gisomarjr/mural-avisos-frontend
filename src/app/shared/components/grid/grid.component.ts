import {
  Component,
  HostListener,
  Input,
  ViewEncapsulation,
  Output
} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent {
  filtro: string;
  gridApi: any;

  @Input()
  columnDefs: object[];

  @Input()
  data: object[];

  @Input()
  gridOptions: object[];

  @Output()
  Selections

  qtdRegistros = 10;

  paginaAtual: number;
  primeiroRegistroPag: number;
  ultimoRegistroPag: number;
  totalRegistros: number;
  qtdPaginas: number;

  atualizar(data: object[]) {
    this.data = data;
  }

  onGridReady(event) {
    this.gridApi = event.api;
    this.gridApi.sizeColumnsToFit();
    this.atualizarPaginacao();

    setTimeout(() => {
      this.gridApi.sizeColumnsToFit();
    }, 500);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.gridApi.sizeColumnsToFit();
  }

  filtrar() {
    this.gridApi.setQuickFilter(this.filtro);
  }

  alterarQtdRegistros() {
    this.gridApi.paginationSetPageSize(Number(this.qtdRegistros));
  }

  atualizarPaginacao() {
    if (this.gridApi) {
      const tamanhoPag = this.gridApi.paginationGetPageSize();
      this.qtdPaginas = this.gridApi.paginationGetTotalPages();
      this.paginaAtual = this.gridApi.paginationGetCurrentPage() + 1;

      this.totalRegistros = this.gridApi.paginationGetRowCount();
      this.primeiroRegistroPag = tamanhoPag * (this.paginaAtual - 1) + 1;

      this.ultimoRegistroPag =
        this.paginaAtual === this.qtdPaginas
          ? this.primeiroRegistroPag +
          (this.totalRegistros - this.primeiroRegistroPag + 1) -
          1
          : this.primeiroRegistroPag + tamanhoPag - 1;
    }
  }

  irParaPrimeiraPag() {
    this.gridApi.paginationGoToFirstPage();
  }

  irParaPagAnterior() {
    this.gridApi.paginationGoToPreviousPage();
  }

  irParaProxPag() {
    this.gridApi.paginationGoToNextPage();
  }

  irParaUltimaPag() {
    this.gridApi.paginationGoToLastPage();
  }
}
