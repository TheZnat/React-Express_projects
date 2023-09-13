import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
       this.types = [];
       this.brands = [];
       this.devices = [];
       this.selectedType = {};
       this.selectedBrand = {};
       this.page = 1;
       this.totalCount = 0;
       this.limit = 3;
        makeAutoObservable(this)
    }

    setPage(page) {
        this.page = page;
    }

    setLimit(limit) {
        this.limit = limit;
    }

    setTotalCount(totalCount) {
        this.totalCount = totalCount;
    }

    setSelectedType(type) {
        this.setPage(1);
        this.selectedType = type;
    }

    setSelectedBrand(type){
        this.setPage(1);
        this.selectedBrand = type;
    }

    setTypes(types) {
        this.types = types;
    }
    setBrands(brands) {
        this.brands = brands;
    }
    setDevices(devices) {
        this.devices = devices;
    }

    getTypes() {
        return this.types;
    }

    getBrands() {
        return this.brands;
    }

    getDevices() {
        return this.devices;
    }

    getSelectedType(){
        return this.selectedType;
    }

    getSelectedBrand(){
        return this.selectedBrand;
    }

    getPage(){
        return this.page;
    }

    getTotalCount(){
        return this.totalCount;
    }

    getLimit(){
        return this.limit;
    }

}