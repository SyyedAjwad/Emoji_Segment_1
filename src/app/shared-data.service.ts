import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {


  constructor() { }

triggerModal=new Subject();
modalStatus=false;


segmentSubj=new Subject();
tableSubj=new Subject();


segment=[{}];


}
