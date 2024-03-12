import { Component, Input, OnChanges, OnInit, SimpleChanges, Type } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
        selector: 'app-data-table',
        standalone: true,
        imports: [CommonModule],
        templateUrl: './data-table.component.html',
        styleUrl: './data-table.component.css'
})
export class DataTableComponent<T extends object> implements OnInit{
        
        
        private _dataList: T[] = [];

        @Input() 
        set dataList(value) {
                this._dataList = value;
                this.updateVisibleData();
        }

        get dataList(){
                return this._dataList;
        }

        visibleData: T[] = []

        @Input()
        collapseComponentModel : Type<any> | null = null;

        @Input()
        componentModelBaseInputs : Record<string, unknown> = {};

        collapseState: boolean[] = [];
        
        private _validKeys: (keyof T)[] = [];

        pageNumber = 1;
        pageSize = 5;


        @Input() 
        set validKeys(value: (keyof T)[]){
                this._validKeys = value;
                
                for(let i = 0; i<this.validKeys.length; i++){
                        this.collapseState[i] = true;
                }
        }

        get validKeys(): (keyof T)[]{
                return this._validKeys;
        }

        componentInputs(index: number): Record<string, unknown>{
                return {data: this.dataList[index], ...this.componentModelBaseInputs};
        }

        toggle(index: number): void{
                this.collapseState[index] = !this.collapseState[index];
        }

        changePage(amount: number){

                let lastPage = Math.ceil(this.dataList.length/this.pageSize)
                if(this.pageNumber + amount <= 0 || this.pageNumber + amount > lastPage){
                        return;
                }
                
                this.pageNumber += amount;
                this.updateVisibleData();
        }

        updateVisibleData(){
                this.visibleData = this.dataList.slice((this.pageNumber-1)*this.pageSize, this.pageNumber*this.pageSize-1);
        }

        ngOnInit(): void {
                this.updateVisibleData();
        }

}
